import { useQuery } from "react-query";
import { StudentService } from "services/StudentService";

export const useStudent = (page: string, cached?: boolean) => {
  const getStudents = useQuery(["getStudents"], async () => {
    if (cached) {
      return;
    }
    const { data, success, error } = await StudentService.getStudents(page);

    return { data, success, error };
  });

  return {
    getStudents,
  };
};
