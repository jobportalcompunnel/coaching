from flask import Blueprint, render_template
from datetime import datetime

# 1. Create a Blueprint instance.
# 'main' is the Blueprint's name.
# __name__ is the module name (routes.py) which Flask uses to locate resources.
gemini = Blueprint('gemini', __name__)

# 2. Define routes using the Blueprint instance (main.route) instead of app.route
@gemini.route('/gemini')
def index():
    """
    Renders the homepage using data gathered within this file.
    """
    data = {
        'page_title': 'Modular Flask App with Blueprints',
        'current_time': datetime.now().strftime('%H:%M:%S'),
        'feature_list': [
            'app.py initializes Flask',
            'routes.py defines routes using a Blueprint',
            'app.py registers the Blueprint',
            'Better project organization!'
        ]
    }
    
    # render_template automatically looks for templates in the 'templates' folder 
    # relative to the application root.
    return render_template('controller/gemini.html', **data)

# You can add more routes here for other pages (e.g., @main.route('/about'))
