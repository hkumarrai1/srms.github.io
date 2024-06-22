<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DTC Students Records System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Dashboard</a></li>
                <li><a href="students.php">Students</a></li>
                <li><a href="courses.php">Courses</a></li>
                <li><a href="reports.php">Reports</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="dashboard">
            <h1>Welcome to DTC Students Records System</h1>
            <p>This is the dashboard of the system. From here, you can access various features of the system.</p>
            <div class="stats">
                <div class="stat">
                    <h2>Students: <span id="studentCount">0</span></h2>
                    <p>Total number of students in the system.</p>
                </div>
                <div class="stat">
                    <h2>Courses: <span id="courseCount">0</span></h2>
                    <p>Total number of courses offered in the system.</p>
                </div>
                <div class="stat">
                    <h2>Reports: <span id="reportCount">0</span></h2>
                    <p>Total number of reports generated in the system.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 DTC Students Records System</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>