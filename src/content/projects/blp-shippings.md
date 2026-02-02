---
featured: false
title: BLP Shippings
description: >-
  A web-based application that provide interaction between BLP's order
  fulfillments and API from third party logistic. 
image: '@assets/projects/blp-shippings/image.png'
startDate: 2022-10-01
endDate: 2023-08-01
skills:
  - Express JS
  - MySQL
  - Node.js
---
## Overview

BLP Shippings is a web-based application that provide interaction between BLP's order fulfillments and API from third party logistic. Using custom mechanism to running tasks like retrieve BLP orders from BLP webstore, getting the third-party logistic's airway bills, and fulfill the orders in a single click.

In this project, I was responsible for creating and developing a restful API that would be consumed by frontend developer.

### Core Features

- This app provide feature that includes retrieve unfulfilled orders in BLP Webstore. The data stored in a database, and then a user can create orders through API from third-party logistic based on data in the database.
- Furthermore, this app also provide feature to retrieve airway bills from the logistic, based on orders that has been created through the logistic’s API. After the airway bills retrieved, the orders will be marked as fulfilled automatically.
- The bulk-create order and create fulfillment process are provided in a single API call (single click).

## Impacts

- This REST API **has been consumed** by Frontend Developer of BLP Beauty, and the app has been used for **operational department’s** daily basis work.
- This app **helped operational department** in terms of creating labels and fulfill orders automatically in BLP’s Webstore.
