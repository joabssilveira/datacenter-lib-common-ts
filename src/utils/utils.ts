export function formatPhone(value: string) {
  // remove tudo que não for número
  const numbers = value.replace(/\D/g, '').slice(0, 11);

  if (!numbers) return '';

  // até 2 dígitos -> (83
  if (numbers.length <= 2) {
    return `(${numbers}`;
  }

  // telefone fixo
  if (numbers.length <= 10) {
    return numbers.replace(
      /(\d{2})(\d{0,4})(\d{0,4})/,
      (_, ddd, part1, part2) => {
        if (part2) {
          return `(${ddd}) ${part1}-${part2}`;
        }

        return `(${ddd}) ${part1}`;
      }
    );
  }

  // celular
  return numbers.replace(
    /(\d{2})(\d{0,5})(\d{0,4})/,
    (_, ddd, part1, part2) => {
      if (part2) {
        return `(${ddd}) ${part1}-${part2}`;
      }

      return `(${ddd}) ${part1}`;
    }
  );
}