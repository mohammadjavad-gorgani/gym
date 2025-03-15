/**
 * @swagger
 * tags:
 *  name: Class
 *  description: Class or Session Module and Routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Schedule:
 *       type: object
 *       required:
 *         - day
 *         - startTime
 *         - endTime
 *       properties:
 *         day:
 *           type: string
 *           enum:
 *             - شنبه
 *             - یکشنبه
 *             - دوشنبه
 *             - سه‌شنبه
 *             - چهارشنبه
 *             - پنج‌شنبه
 *             - جمعه
 *           example: "شنبه"
 *         startTime:
 *           type: string
 *           example: "14:00"
 *         endTime:
 *           type: string
 *           example: "15:30"
 * 
 *     CreateClass:
 *       type: object
 *       required:
 *         - title
 *         - coachName
 *         - schedules
 *       properties:
 *         title:
 *           type: string
 *           example: "کلاس کاراته مبتدی"
 *         coachName:
 *           type: string
 *           example: "سنسی معصومه گرگانی"
 *         schedules:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/Schedule"
 *         students:
 *           type: array
 *           items:
 *             type: string
 *           example: ["65ad2c7b52e4f3a8f1b2a4c5"]
 */

/**
 * @swagger
 * /class:
 *  post:
 *      summary: create new class or session
 *      tags:
 *          -   Class
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateClass'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateClass'
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /class:
 *  get:
 *      summary: get all classes
 *      tags:
 *          -   Class
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /class/{id}:
 *  get:
 *      summary: get class by id
 *      tags:
 *          -   Class
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
 * /class/{id}:
 *  delete:
 *     summary: delete class by id
 *     tags:
 *         -   Class
 *     parameters:
 *         -   in: path
 *             name: id
 *             type: string
 *     responses:
 *         200:
 *             descriptions: deleted successfully
 */