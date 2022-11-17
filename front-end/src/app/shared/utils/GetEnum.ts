export class GetEnum {
  static GetIdForCourse(value: string) {
    if (value === 'Engenharia da Computação') {
      return 1;
    }
    if (value === 'Engenharia Metalúrgica') {
      return 2;
    }
    return 0;
  }
}
