import host from "../utils/host";
import axios from "axios";

export class StudentService {
  static async getStudents() {
    const url = `${host()}/?page=2&results=20&seed=abc`;

    try {
      const response = await (
        await this.getAxiosInstance()
      ).get(url);

      if (response.status === 200) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };
      return {
        error: "Erro ao buscar os Alunos.",
        success: false,
      };
    }
  }

  static async getAxiosInstance() {
    return axios.create({
      baseURL: `${host()}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
