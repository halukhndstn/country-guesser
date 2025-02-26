# Country Guesser Game with Admin Panel
A map-based WEB game where users answer location questions (capitals or tourist destinations) by clicking on the map within a set time limit.

**Video**: https://youtu.be/6JfEYxxkOog
## Installation
- Clone or install this repository from GitHub:

        git clone https://github.com/halukhndstn/country-guesser.git

- Perform a "Restore" operation via **pgAdmin4** using the "web-gis.sql" file in the "sql" folder. (The necessary tables in the database are created.)
- Write information about the database you will use in the "connection.js" file in the "api" folder.
  - **Example:**

  ![image](https://github.com/user-attachments/assets/b800c44e-c101-4029-88e4-c732be58dad9)
- Open terminal in the repository file and, use this command:
    - to first start:

          npm install && npm start
      
    - to start:

          npm start
      
- Go to "http://localhost:5173/" and enjoy it!

## Project Structure
- **Vue.js**: A modern JavaScript framework used for user interface development.
- **Leaflet**: A lightweight and powerful JavaScript library used for map visualization.
- **Bootstrap**: A popular CSS framework used to provide a user-friendly and responsive design.
- **Node.js**: A JavaScript runtime environment used as an API layer.
- **PostgreSQL + PostGIS**: An open source relational database system that supports geographic data management and queries.
- **Nominatim**: An API for OpenStreetMap based location searching and geocoding.

## Use-Case
![image](https://github.com/user-attachments/assets/dbd43985-9510-466b-b867-d47bad0e3298)

**Admins** can log in to the admin panel and edit the question and user tables using all **CRUD** methods. **Users** can see the questions using the **Read** method.

## Screenshots
### Login Screen
![image](https://github.com/user-attachments/assets/09cad98f-f636-4e5f-8383-16cfddee26eb)
### Game Screen
![image](https://github.com/user-attachments/assets/3f5e032f-7181-41a9-bd5e-0a561b4c12dc)
### Admin Panel
![image](https://github.com/user-attachments/assets/a60591bb-aecf-4797-abf1-6d932de4f30d)

![image](https://github.com/user-attachments/assets/febe2629-7aae-48e5-8119-a2b918db3ca7)



