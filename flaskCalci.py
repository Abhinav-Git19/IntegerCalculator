from flask import Flask,jsonify,request,render_template
from flask_cors import CORS
from ExpressionScript import Solution


app=Flask(__name__)
CORS(app)

@app.route('/evaluate', methods=['GET', 'POST'])
def evalute():
    # POST request
    if request.method == 'POST':
        print('Incoming..')
        input=request.get_json(force=True)  # parse as JSON
        expr=input['expr']

        result=Solution().calculate(expr)
        response = jsonify({"result":result})
        return response

    # GET request
    else:
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers

@app.route('/',methods=['GET'])
def welcome():
    return render_template('index.html')



if __name__ == "__main__":
    app.run(debug=True)
