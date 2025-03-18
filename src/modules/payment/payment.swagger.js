/**
 * @swagger
 *  tags:
 *      name: Payment
 *      description: Payment Module and Routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      CreatePayment:
 *          type: object
 *          required:
 *              - studentId
 *              - amount
 *              - month
 *          properties:
 *              studentId:
 *                  type: string
 *                  example: "65ad2c7b52e4f3a8f1b2a4c5"
 *              amount:
 *                  type: number
 *                  example: 200000
 *              date:
 *                  type: string
 *                  format: date-time
 *                  example: "2025-03-16T00:00:00.000Z"
 *              month:
 *                  type: string
 *                  example: "04-01"
 *              method:
 *                  type: string
 *                  enum:
 *                  - کارت به کارت
 *                  - نقدی
 *                  example: "کارت به کارت"
 *              note:
 *                  type: string
 *                  example: "توضیحات"
 */

/**
 * @swagger
 * /payment:
 *  post:
 *      summary: create new payment
 *      tags:
 *          - Payment
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreatePayment'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreatePayment'
 *      responses:
 *          201:
 *              description: created
 */