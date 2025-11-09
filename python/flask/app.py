from flask import Flask, jsonify, request, render_template, redirect, url_for
from datetime import datetime
from templates.controller.main import main
from templates.controller.gemini import gemini
#from routes from controller/main

# Initialize the Flask application
app = Flask(__name__)
app.register_blueprint(main)
app.register_blueprint(gemini)


# A simple list to simulate a database (e.g., a list of books)
books = [
    {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"id": 2, "title": "1984", "author": "George Orwell"}
]

@app.route("/hello/<name>")
def hello(name):
    return f"Hello {name}"


@app.route("/returnhome")
def returnhome():
    return redirect(url_for("hello", name="world"))

# --- GET (Retrieve All Items) ---
@app.route('/books', methods=['GET'])
def get_books():
    """Returns the list of all books."""
    # Use jsonify to return a JSON response
    return jsonify({"books": books})

# --- GET (Retrieve a Single Item) ---
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    """Returns a single book by its ID."""
    book = next((item for item in books if item["id"] == book_id), None)
    if book:
        return jsonify(book)
    return jsonify({"error": "Book not found"}), 404

# --- POST (Create a New Item) ---
@app.route('/books', methods=['POST'])
def add_book():
    """Adds a new book to the list."""
    # Ensure the request body contains JSON data
    if not request.json or 'title' not in request.json:
        return jsonify({"error": "Invalid data format or missing title"}), 400
    
    # Simple logic to determine the next ID
    new_id = max(book['id'] for book in books) + 1 if books else 1
    
    new_book = {
        "id": new_id,
        "title": request.json['title'],
        "author": request.json.get('author', 'Unknown') # Use .get for optional fields
    }
    books.append(new_book)
    
    # Return the newly created resource and status code 201 (Created)
    return jsonify(new_book), 201

# --- PUT (Update an Existing Item) ---
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    """Updates an existing book by its ID."""
    book = next((item for item in books if item["id"] == book_id), None)
    
    if not book:
        return jsonify({"error": "Book not found"}), 404
    if not request.json:
        return jsonify({"error": "Invalid data format"}), 400

    book['title'] = request.json.get('title', book['title'])
    book['author'] = request.json.get('author', book['author'])

    return jsonify(book)


# --- DELETE (Remove an Item) ---
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    """Deletes a book by its ID."""
    global books # Need to declare global to modify the list at the module level
    initial_length = len(books)
    books = [book for book in books if book['id'] != book_id]
    
    if len(books) < initial_length:
        # Status code 204 (No Content) is often used for successful DELETE requests
        return '', 204 
    return jsonify({"error": "Book not found"}), 404

# Define a route for the homepage
@app.route('/test')
def index():
    # 1. Gather data to be displayed on the page
    data = {
        'page_title': 'My Flask HTML Page',
        'current_time': datetime.now().strftime('%H:%M:%S'),
        'feature_list': ['Easy Routing', 'Jinja Templating', 'Lightweight Design']
    }
    
    # 2. Render the template
    # render_template looks in the 'templates' folder for 'index.html'
    # It passes the 'data' dictionary as keyword arguments to the template.
    return render_template('index.html', **data)

# --- Run the application ---
if __name__ == '__main__':
    # host='0.0.0.0' makes the server externally visible 
    # (useful for Docker/deployment, but default is '127.0.0.1' (localhost))
    app.run(debug=True)