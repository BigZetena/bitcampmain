

export const shafleElements = <Element extends { id: string }>(
  arr: Element[],
  excludeId: string,
  count: number
): Element[] => {
  // Копируем массив, чтобы исключить текущий элемент
  const filteredArray = arr.filter((e) =>  e.id !== excludeId );

  // Перемешиваем массив
  const shuffled = filteredArray.sort(() => 0.5 - Math.random());

  // Возвращаем заданное количество элементов
  return shuffled.slice(0, count);
};
