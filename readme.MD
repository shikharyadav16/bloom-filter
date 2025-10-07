# Bloom Filter Project

A simple **Bloom Filter implementation in JavaScript** for efficiently checking the presence of strings in a set. This project demonstrates how to use hashing and bit arrays to store data with minimal memory, while allowing for fast lookups.  

---

## Overview

A **Bloom Filter** is a **probabilistic data structure** that can quickly tell whether an element is **definitely not in a set** or **possibly in the set**.  

- **False positives** may occur (it may say an element exists when it doesn’t).  
- **False negatives never occur** (if it says an element doesn’t exist, it truly doesn’t).  

This makes Bloom Filters **memory-efficient** and **fast**, ideal for applications like:

- Username availability checks
- Caching systems
- Spell checking
- Networking and databases

---

## Features

- Uses a **bit array** to store hashed values.
- Multiple hash functions via **different seeds**.
- Supports **lowercase letters**, **digits**, and **underscore (`_`)**.
- Fast `add` and `check` operations.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Bloom-Filters.git
cd Bloom-Filters
```
2. Install dependencies:

```bash
npm install
```

3. Start the server

```bash
npm start
```