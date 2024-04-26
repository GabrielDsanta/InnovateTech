import { useQuery } from "react-query";
import { StudentService } from "services/StudentService";

export const useStudent = () => {
  const getStudents = useQuery(["getStudents"], async () => {

    const { data, success, error } = await StudentService.getStudents();

    return { data, success, error };
  });

  return {
    getStudents,
  };
};
