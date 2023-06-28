
# date-picker-typescript

A small datepicker developped with Vite/Typescript and React.




## Badges

[![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


## Installation

Install date-picker-typescript with npm

```bash
  npm i date-picker-typescript
```
     
The datepicker already come with an input.

In order to work it need two variables:
* yearRange : Use to select the range of years you want for your date picker
* returnDate : a fonction to catch the date return by the datepicker

Here is the barebone way for it to work :

```typescript
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    
    const handleReturnDateBirth = (date: string) => {
		setDateOfBirth(date)
	}

    <DatePicker
		yearRange={{ start: 1960, end: 2005 }}
		returnDate={handleReturnDateBirth}
	/>
```