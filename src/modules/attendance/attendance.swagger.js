/**
 * @swagger
 * tags:
 *  name: Attendance
 *  description: Attendance Module and Routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      AttendanceInput:
 *          type: object
 *          required:
 *              - classId
 *              - students
 *          properties:
 *              classId:
 *                  type: string
 *                  example: "65ad2c7b52e4f3a8f1b2a4c5"
 *              students:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          studentId:
 *                              type: string
 *                              example: "65ad2c7b52e4f3a8f1b2a4c6"
 *                          present:
 *                              type: boolean
 *                              example: false
 */

/**
 * @swagger
 * /attendance:
 *  post:
 *      summary: Record student attendance status
 *      tags:
 *          - Attendance
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/AttendanceInput'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AttendanceInput'
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /attendance/{id}:
 *  get:
 *      summary: get report of student attendances by studentId
 *      tags:
 *          -   Attendance
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              descriptions: successfully
 */