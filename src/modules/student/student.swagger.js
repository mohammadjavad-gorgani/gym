/**
 * @swagger
 * tags:
 *  name: Student
 *  description: Student Module and Routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      CreateStudent:
 *          type: object
 *          required:
 *              - name
 *              - family
 *              - belt
 *              - phoneNumber
 *              - class
 *          properties:
 *              name:
 *                  type: string
 *                  example: "مطهره"
 *              family:
 *                  type: string
 *                  example: "رضایی"
 *              belt:
 *                  type: string
 *                  enum: ["سفید", "زرد", "سبز", "آبی", "قهوه ای", "مشکی"]
 *                  example: "سفید"
 *              phoneNumber:
 *                  type: string
 *                  example: "09123456789"
 *              class:
 *                  type: string
 *                  example: "60d21b4667d0d8992e610c85"
 *              membershipDate:
 *                  type: string
 *                  format: date-time
 *                  example: "2025-03-16T00:00:00.000Z"
 *      UpdateStudent:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              family:
 *                  type: string
 *              belt:
 *                  type: string
 *                  enum: ["سفید", "زرد", "سبز", "آبی", "قهوه ای", "مشکی"]
 *              phoneNumber:
 *                  type: string
 *              class:
 *                  type: string
 *              membershipDate:
 *                  type: string
 *                  format: date-time
 *                  example: "2025-03-16T00:00:00.000Z"
 */

/**
 * @swagger
 * /student:
 *  post:
 *      summary: create new student
 *      tags:
 *          - Student
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateStudent'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateStudent'
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /student:
 *  get:
 *      summary: get all students
 *      tags:
 *          - Student
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /student/{id}:
 *  put:
 *      summary: update student by id
 *      tags:
 *          - Student
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The student ID
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateStudent'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateStudent'
 *      responses:
 *          200:
 *              description: successfully updated
 *          404:
 *              description: student not found
 */

/**
 * @swagger
 * /student/{id}:
 *  get:
 *      summary: get student by id
 *      tags:
 *          -   Student
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              descriptions: successfully
 */

/**
 * @swagger
 * /student/{id}:
 *  delete:
 *     summary: delete student by id
 *     tags:
 *         -   Student
 *     parameters:
 *         -   in: path
 *             name: id
 *             type: string
 *     responses:
 *         200:
 *             descriptions: deleted successfully
 */