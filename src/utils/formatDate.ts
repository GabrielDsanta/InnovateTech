import moment from "moment";

export function formatDate(date: Date) {
  const dataMoment = moment(date);
  const fomartedDate = dataMoment.format("DD/MM/YYYY");
  return fomartedDate;
}
