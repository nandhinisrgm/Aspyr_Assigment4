# Aspyr-Assignment-4
A React and Django-based web application to dynamically fetch and display clients by age range and gender. The frontend is built using React and styled with custom CSS, while the backend API is powered by Django. This project enables users to filter client data by gender and age, providing a smooth and interactive user experience. 
 
# Client Filtering Application

This project is a web-based application that allows users to filter and display client data by age range and gender. The frontend is built using **React** for dynamic interaction, and the backend API is developed using **Django**. Users can easily filter clients based on gender and age, and view the corresponding data in a well-organized table format.

## Features
- Dynamic filtering of clients by **gender** and **age range**.
- Responsive UI with styled components such as buttons and tables.
- Real-time fetching of client data from the backend API.
- Error handling and loading states for improved user experience.

## Technologies Used
- **React** (Frontend)
- **Django** (Backend API)
- **Axios** (For API requests)
- **PostgreSQL** (Database)
- **CSS** (Custom styling for the UI)

## Project Structure


## How to Run the Project

### Prerequisites
- Node.js (for the frontend)
- Python (for the backend)
- PostgreSQL (for the database)

### Backend Setup (Django)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo.git
    cd your-repo/server
    ```

2. Install the required Python dependencies:
    ```bash
    pip install psycopg2
    python -m pip install django
    pip install djangorestframework
    ```

3. Set up PostgreSQL and configure `settings.py` with your database credentials.

4. Run migrations and start the Django server:
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```
    If there is any error while executing runserver or migrate commands try in virtualenv.
    step by step and write commands from the start in README.md for backend
    ```bash
    py -m pip install --user virtualenv
    py -m venv env
    .\env\Scripts\activate
    python -m pip install Django
   ```
### Frontend Setup (React)
1. Navigate to the frontend directory:
    ```bash
    cd client-app
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

4. The frontend will run on `http://localhost:3000` by default.

### API Endpoints

- **GET /api/genders/**: Fetches the list of distinct genders.
- **GET /api/countByGender/:gender/**: Fetches the count of clients by gender.
- **GET /api/clientsByAge/:low_age/:high_age/:gender/**: Fetches clients filtered by age range and gender.

## Credits

This project was developed collaboratively by:

- [Burra V S B Sankar](https://github.com/sankarbvsb1543)
- [Srithanmai](https://github.com/srithanmai)
- [Kankala Sandeep](https://github.com/kankala-sandeep)
- [Nandhini SRGM](https://github.com/nandhinisrgm)




