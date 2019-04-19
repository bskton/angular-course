import { Request, Response } from 'express';
import { COURSES } from '../src/data';

export function getAllCourses(req: Request, res: Response) {
  res.status(200).json(Object.keys(COURSES).map(key => COURSES[key]));
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.params['id'];
  const courses: any = Object.keys(COURSES).map(key => COURSES[key]);
  const course = courses.find(course => course.id == courseId);
  res.status(200).json(course);
}
