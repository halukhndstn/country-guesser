# Country Guesser Game with Admin Panel
A map-based WEB game where users answer location questions (capitals or tourist destinations) by clicking on the map within a set time limit.

**Video**: https://youtu.be/6JfEYxxkOog
## Installation
- Clone or install this repository from GitHub:

        git clone https://github.com/GMT-458-Web-GIS/final-project-halukhndstn.git

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
- **Node.js**: A JavaScript runtime environment used as an API layer.
- **PostgreSQL + PostGIS**: An open source relational database system that supports geographic data management and queries.
- **Nominatim**: An API for OpenStreetMap based location searching and geocoding.

## Use-Case
![image](https://github.com/user-attachments/assets/dbd43985-9510-466b-b867-d47bad0e3298)

**Admins** can log in to the admin panel and edit the question and user tables using all **CRUD** methods. **Users** can see the questions using the **Read** method.

## SQL Query Functions
**Example:**
```javascript
app.put('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { qtext, answer, latitude, longitude } = req.body;

    const result = await pool.query(
      'UPDATE public.question SET qtext = $1, answer = $2, latitude = $3, longitude = $4, geom = ST_SetSRID(ST_MakePoint($4, $3), 4326) WHERE id = $5 RETURNING *',
      [qtext, answer, latitude, longitude, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```
With this function, when the "latitude" and "longitude" information is changed via the admin panel, the "geom" column is automatically filled.

## Use of AI
Helped to draw a roadmap on how to do the project. Decided on the API to determine the country of the user selected locations. Learned how to use Nominatim (OpenStreetMap Geocoding API). Learned why I needed to use OpenSteerMap's CARTO and how to use it. Helped to get a cleaner code and tested the color palettes via shortcuts. Helped to resolve bugs so that the function structure in JavaScript was understood more clearly. Helped to choose the method of hashing ("bcrypt") the passwords for security while writing the API. Helped me to create query data and write the appropriate SQL query.
