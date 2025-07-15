const VendaStatus = {
  INICIADA: "iniciada",
  CONCLUIDA: "concluida",
  CANCELADA: "cancelada",
} as const;

console.log(VendaStatus.INICIADA);
console.log(VendaStatus.CONCLUIDA);
console.log(VendaStatus.CANCELADA);
