class Solution:
    
    def evaluate(self,numst,opst):
        
        #Edge case '-' or '+' acts as unarary operator
        
        a=numst[-1]
        numst.pop()
        op = opst[-1]
        opst.pop()
        b=numst[-1]
        numst.pop()
        
        
        ans=0
        if op=='+':
            ans=a+b
        elif op=='-':
            ans=b-a
        elif op=='*':
            ans=b*a
        else:
            ans=b//a
        
        numst.append(ans)
    
    def precedence(self,op1,op2):
        '''
        Returns true if precedence(op1)>=precedence(op2)
        '''
        
        if (op1=='*' or op1 =='/') and (op2=='+' or op2=='-'):
            return True
        elif (op1=='*' or op1 =='/') and (op2=='*' or op2=='/'): #Operator associativity
            return True
        elif (op1=='+' or op1 =='-') and (op2=='+' or op2=='-'): 
            return True
        else:
            return False
    
      
    def calculate(self,s: str) -> int:
        
        #Remove whitespaces
        s=s.replace(" ","")
        #print(s)
        
        
        i=0
        numst=[]
        opst=[]
        if s[0]=='-':
            numst.append(0)
        while i < len(s):
            
            #print(numst,opst)
            if s[i].isdigit():
                temp=""
                while i<len(s) and s[i].isdigit():
                    temp+=s[i]
                    i+=1
                numst.append(int(temp))
                continue
            elif s[i]=='+' or s[i]=='-' or s[i]=='/' or s[i]=='*':
                while len(opst)>0 and self.precedence(opst[-1],s[i]):
                    self.evaluate(numst,opst)
                opst.append(s[i])
            elif s[i]=='(':
                if i+1<len(s) and s[i+1]=='-':
                    numst.append(0)
                opst.append(s[i])
            else:
                while len(opst)>0 and opst[-1]!='(':
                    self.evaluate(numst,opst)
                opst.pop()
            i+=1
        
        
        while len(numst)!=1 and len(opst)>0:
            #print(numst,opst)
            self.evaluate(numst,opst)
        
        return numst[0] if len(numst)==1 else 0
