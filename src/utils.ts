// A<B<C>> -> [A, B, C]
export const getAllDeps = (type: string): string[] => {
  return type.split('<').map(t => t.replace(/>/g, '').replace(/\[\]/g, ''));
}

// A<T> -> A
export const removeGenericsSign = (type: string): string => {
  return type.replace(/<T>/g, '')
}

// A{T} -> A
export const removeArraySign = (type: string): string => {
  return type.replace(/\[\]/g, '')
}

// A<T> -> true, A -> false
export const isGenerics = (type: string): boolean => {
  return type.includes('<T>');
}