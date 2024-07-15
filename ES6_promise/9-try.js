export default function guardrail(mathFunction) {
  let queue = [];

  try {
    const result = mathFunction();

    queue = [
      result,
      'Guardrail was processed',
    ];
  } catch (error) {
    queue = [
      error.toString(),
      'Guardrail was processed',
    ];
  }

  return queue;
}
