# Template-Selling Marketplace (Next.js Full Stack)

Welcome to the **Template-Selling Marketplace**, a full-stack platform built with **Next.js** for buying and selling digital products such as website templates, themes, and plugins. This repository contains the code and structure for a marketplace similar to ThemeForest, where users can browse, purchase, and manage digital assets.

## Features

### User Management
- **User Authentication**: Secure login and registration using [Auth.js](https://authjs.dev/) (OAuth, email/password).
- **User Profiles**: Buyers and sellers have customizable profiles with purchase history and product management features.
- **User Roles**: 
  - **Buyers**: Browse, purchase, and download templates.
  - **Sellers**: Upload products, manage listings, track sales, and view earnings.

### Product Management
- **Product Listing**: Templates are categorized for easy navigation. Each listing includes detailed descriptions, screenshots, and live previews.
- **Product Licenses**: Multiple licensing options for templates (e.g., Regular, Extended) with different pricing.
- **Search & Filters**: Full-text search with sorting and filtering by category, price, ratings, etc.
- **Product Versioning**: Sellers can upload updates and manage product versions.

### Seller Dashboard
- **Product Upload**: Sellers can upload templates, preview images, and demo URLs.
- **Earnings & Sales**: Sellers can view sales analytics and earnings reports in their dashboard.
- **Product Approval**: New products go through an admin approval process.

### Purchasing & Payments
- **Shopping Cart**: Buyers can add multiple products to the cart before checkout.
- **Secure Payments**: Integrated with [Stripe](https://stripe.com/) and [PayPal](https://www.paypal.com/).
- **Order History**: Buyers can access and download purchased templates from their profile.

### Reviews & Ratings
- **Product Reviews**: Buyers can rate and review products post-purchase.
- **Seller Engagement**: Sellers can respond to reviews.
- **Moderation**: Admins can manage reviews to ensure quality.

### Admin Panel
- **User Management**: Admins can manage users and assign roles.
- **Product Approval**: Admins can approve or reject product submissions.
- **Analytics & Reports**: View detailed reports on sales, traffic, and platform performance.

### Security
- **Data Encryption**: Sensitive user information is encrypted.
- **Payment Security**: PCI-DSS compliant payments.
- **Role-Based Access Control**: Granular control over permissions for buyers, sellers, and admins.

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (Server-Side Rendering for improved SEO)
- **Styling**: [Bootstrap](https://getbootstrap.com/)

## Installation & Setup

### Prerequisites
- Node.js 14+
- MongoDB Atlas or local MongoDB instance
- Stripe/PayPal account for payments

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/username/marketplace.git
   cd marketplace

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add necessary environment variables (e.g., MongoDB URI, Stripe API keys)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
