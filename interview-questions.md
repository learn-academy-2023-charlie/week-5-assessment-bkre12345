# ASSESSMENT 5: Interview Practice Questions

### 1. What does calling super do in a Ruby class?

Your answer:
    - A method to call on another method? (I honestly forgot)

Researched answer:
    - `super` calls the same method defined in the superclass (or parent class)
    - when called without any arguments, it passes the exact arguments received by the current method to the superclass
    - allows subclasses (child classes) to inherit behaviors of the superclass (parent class) to extend or modify if needed

### 2. What is a gem?

Your answer:
    - packages of code in Ruby

Researched answer:
    - A package management system for ruby that provides specific functionalities that can be easily integrated into Ruby applications
    - leverages existing code and solutions cotributed by the Ruby community to save development time and effort by reusing well-tested and established components
    - promotes code modularity, code sharing, and collaboration

### 3. What is a relational database? Are there other kinds of databases?

Your answer:
    - A database management system that relates data? (i forgot this one too)
    - Object-oriented database

Researched answer:
    - A type of database management system based on the relational model, proposed by Edgar Codd
    - it organizes and stores data in tables consisted of rows (records) and columns (attributes)
    - relationships are established through keys (primary and foreign keys)
    - There are other types of databases such as NoSQL, Object-Oriented, Hierarchical, Time-series,, and Graph databases.

### 4. What are primary keys? Why purpose does a primary key serve?

Your answer:
    - Primary keys store data that have a unique number and allows easy access

Researched answer:
    - A unique indentifier for a record (row) in a database table
    - It ensures that each record has a distinct and identifiable value 

### 5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
    - Get: Read
    - Post: Create
    - Put: Update
    - Delete: Delete
    - I don't remember the last verb

Researched answer:
    - Get: Read
     - retrieves/fetches data from a server
    - Post: Create
        - submits data to be processed by the server
    - Put: Update
        - updates/replaces existing data on the server
    - Delete: Delete
        - removes a resource from the server
    - Patch: Update
        - partially updates a resources, unlike put (which replaces the entire resource)

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:
    - refers to the rules & constraints applied to data in a software model/database
    - ensures the data meets specific conditions before it is saved or processed
    - helps maintain data integrity & enforces consistency & accuracy

2. RESTful routes:
    - REpresentational State Transfer routes
    - set of conventions used when designing web services
    - defines endpoints or URLS & its corresponding HTTP methods to perform operations on data

3. ERB:
    - Embedded Ruby, a templating language used with Ruby on Rails
    - enables dynamic coding by embedding Ruby code within HTML or other markup languages

4. Params:
    - Parameters, often refers to the data passed to web applications or API through the URL query string
    - allows access to perform operations based on provided values

5. API:
    - Application Programming Interface, a set of rules, protocols, and tools that allow different software applications to communicate and interact
    - defines methods and data formats used for requesting/exchanging info between apps
    - commonly used to integrate different systems, retrieve data from remote servers, and building software apps that use external resources or services