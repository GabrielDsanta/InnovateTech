import { useQuery } from "react-query";
import { StudentService } from "services/StudentService";

export const useStudent = (page: string) => {
  const getStudents = useQuery(["getStudents"], async () => {
    const { data, success, error } = await StudentService.getStudents(page);

    return { data, success, error };
  });

  return {
    getStudents,
  };
};
