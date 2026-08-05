-- Create Database
CREATE DATABASE IF NOT EXISTS fault_reporting_system;

-- Use Database
USE fault_reporting_system;

-- Create Table
CREATE TABLE IF NOT EXISTS fault_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    studentid VARCHAR(30) NOT NULL,
    building VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    asset_tag VARCHAR(100) NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
