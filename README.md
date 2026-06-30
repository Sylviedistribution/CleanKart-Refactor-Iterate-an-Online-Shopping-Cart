# 🛒 CleanKart - Refactor & Iterate an Online Shopping Cart

## 📌 Project Overview

CleanKart is a refactored version of a basic online shopping cart application.

The original project consisted of a single JavaScript file containing all the application's logic, including:

- Product quantity management
- Total price calculation
- Favorite products
- Product deletion
- DOM manipulation
- Event handling

The goal of this project was **not to add new features**, but to progressively transform the code into a clean, modular, maintainable, and extensible application by applying **Low-Level Design principles**, **Clean Code practices**, and several **Design Patterns**.

---

# 🎯 Objectives

This project was completed following the assignment requirements:

- Start from an intentionally messy codebase
- Identify code smells
- Apply refactoring techniques
- Improve naming conventions
- Reduce coupling
- Increase cohesion
- Apply Strategy Pattern
- Apply Observer Pattern
- Apply Builder Pattern
- Keep the application runnable after every iteration

---

# 📂 Final Project Structure

```
CleanKart/
│
├── index.html
├── README.md
│
├── assets/
│
├── style/
│   └── style.css
│
└── js/
    │
    ├── builder/
    │   └── ProductBuilder.js
    │
    ├── controllers/
    │   └── ShoppingCartController.js
    │
    ├── models/
    │   ├── Product.js
    │   ├── CartItem.js
    │   └── ShoppingCart.js
    │
    ├── observer/
    │   ├── Observer.js
    │   ├── PriceNotifier.js
    │   ├── EmailObserver.js
    │   ├── SmsObserver.js
    │   └── PushObserver.js
    │
    ├── strategy/
    │   ├── DiscountStrategy.js
    │   ├── NoDiscount.js
    │   ├── PercentageDiscount.js
    │   └── FixedDiscount.js
    │
    ├── views/
    │   └── CartView.js
    │
    └── app.js
```

---

# 🏗 Low-Level Design Principles Applied

The project follows several important Low-Level Design principles.

## 1. Single Responsibility Principle (SRP)

Every class has one and only one responsibility.

| Class | Responsibility |
|---------|---------------|
| Product | Represents a product |
| CartItem | Represents a product inside the cart |
| ShoppingCart | Manages cart operations |
| CartView | Updates the user interface |
| ShoppingCartController | Coordinates interactions |
| ProductBuilder | Creates Product objects |
| PriceNotifier | Notifies observers |
| DiscountStrategy | Calculates discounts |

---

## 2. Separation of Concerns

Business logic is completely separated from presentation logic.

```
User

↓

Controller

↓

Business Logic

↓

View

↓

DOM
```

The models never manipulate the DOM directly.

---

## 3. Encapsulation

Each object is responsible for managing its own data.

For example:

- Product manages its own information.
- CartItem manages its own quantity.
- ShoppingCart manages its own collection of items.

---

## 4. Low Coupling

The different modules communicate through well-defined interfaces instead of depending directly on each other.

This makes the application easier to maintain and extend.

---

## 5. High Cohesion

Each class groups together related responsibilities.

No class performs unrelated tasks.

---

# 🔍 Code Smells Identified

The initial version contained several code smells.

### God Script

All application logic was located inside one JavaScript file.

---

### Tight Coupling

Business logic was directly connected to the DOM.

---

### Long Methods

Several event handlers contained too much logic.

---

### Global Variables

Most variables were declared globally.

---

### Duplicate Logic

The same code patterns appeared multiple times.

---

### Mixed Responsibilities

One file handled:

- UI updates
- Event listeners
- Business logic
- Calculations
- Product management

---

# 🔄 Refactoring Process

The project was refactored incrementally.

## Iteration 1

### Analysis

- Understand the existing application
- Identify code smells

---

## Iteration 2

### Domain Modeling

Created business entities:

- Product
- CartItem
- ShoppingCart

---

## Iteration 3

### MVC Architecture

Separated responsibilities into:

- Models
- Views
- Controllers

---

## Iteration 4

### Strategy Pattern

Implemented flexible discount calculation.

---

## Iteration 5

### Observer Pattern

Implemented notification system for price changes.

---

## Iteration 6

### Builder Pattern

Implemented flexible product creation.

---

# 🎨 Design Patterns

## Strategy Pattern

Purpose:

Allow multiple discount algorithms without modifying the shopping cart.

```
DiscountStrategy
        ▲
        │
 ┌──────┴─────────┐
 │                │
NoDiscount   PercentageDiscount
                │
        FixedDiscount
```

Benefits:

- Open/Closed Principle
- Easy to extend
- No conditional statements

---

## Observer Pattern

Purpose:

Notify multiple services whenever a product price changes.

```
PriceNotifier

        │

 ┌──────┼─────────┐
 │      │         │
Email  SMS     Push
```

Benefits:

- Loose coupling
- Easy to add new notification channels
- No modification of existing code

---

## Builder Pattern

Purpose:

Create complex Product objects using a readable API.

Example:

```javascript
const product = new ProductBuilder()
    .setId(1)
    .setName("Basket")
    .setPrice(100)
    .setCategory("Shoes")
    .build();
```

Benefits:

- Better readability
- Fluent API
- Easier object construction

---

# 🔄 Application Workflow

```
Application Starts

        │

        ▼

app.js

        │

Creates Products

        │

Creates Shopping Cart

        │

Creates View

        │

Creates Controller

        │

Registers Strategies

        │

Registers Observers

        │

Initializes Application

        │

        ▼

User Interaction

        │

        ▼

ShoppingCartController

        │

        ▼

ShoppingCart

        │

        ▼

CartView

        │

        ▼

DOM Updated
```

---

# 💻 Technologies

- HTML5
- CSS3
- JavaScript (ES6 Modules)

---

# 🚀 How to Run

Clone the repository:

```bash
git clone https://github.com/yourusername/cleankart.git
```

Open the project.

Launch `index.html` using a local web server.

For example:

VS Code Live Server

or

```bash
npx serve
```

---

# 📚 What Was Improved

Before:

- One JavaScript file
- Mixed responsibilities
- Difficult to maintain
- Tight coupling
- No architecture

After:

- Modular architecture
- MVC organization
- Low coupling
- High cohesion
- SOLID principles
- Three design patterns
- Easy to extend
- Easier to maintain
- Better readability

---

# 📈 Future Improvements

Possible future enhancements include:

- Local Storage support
- Backend integration
- Shopping cart persistence
- Authentication
- Unit testing
- Product search
- Product categories
- Responsive improvements
- REST API integration

---

# 🎓 Learning Outcomes

Through this project, I learned how to:

- Identify code smells
- Refactor legacy code safely
- Apply SOLID principles
- Design modular applications
- Implement MVC architecture
- Use Strategy Pattern
- Use Observer Pattern
- Use Builder Pattern
- Improve maintainability
- Reduce coupling
- Increase cohesion

---

# 👨‍💻 Author

Developed as part of a **Low-Level Design and Refactoring** assignment.

This project demonstrates the transformation of a basic shopping cart into a clean, modular, and maintainable application using modern software engineering practices and object-oriented design principles.