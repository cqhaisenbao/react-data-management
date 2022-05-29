export const getUserInfo = async () => {
    return new Promise<any>(resolve => {
        setTimeout(() => {
            resolve({
                name: '张三',
                age: 18,
            });
        }, 1000);
    })
}

export const setAge = async (age: number): Promise<number> => {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            reject(age);
        }, 1000);
    })
}
