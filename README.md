# 봉우리코더 2024 여름방학 숙제



1. [프로젝트 생성](#1-프로젝트-생성)
1. [프로젝트 세팅](#2-프로젝트-세팅)
1. [페이지 라우팅](#3-페이지-라우팅)

## (숙제)나만의 홈페이지 제작


### 1. 프로젝트 생성
터미널을 열고 아래 명령어를 입력한다. 
```bash
npx create-next-app@latest
```

명령어를 입력한 후 아래와 같이 

```bash
PS C:\projects> npx create-next-app@latest
Need to install the following packages:
create-next-app@14.2.5
Ok to proceed? (y) y

? What is your project named? » my-project

√ What is your project named? ... my-project
√ Would you like to use TypeScript? ... No / Yes    // Yes
√ Would you like to use ESLint? ... No / Yes // Yes
√ Would you like to use Tailwind CSS? ... No / Yes  // Yes
√ Would you like to use `src/` directory? ... No / Yes  // Yes
√ Would you like to use App Router? (recommended) ... No / Yes  // Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes  // No
Creating a new Next.js app in C:\projects\my-project.
```


아래와 같은 문구가 뜨면 설치 성공!
```bash
Success! Created my-project at C:\projects\my-project
```

ctrl + o + k 를 입력하여 만들어진 프로젝트 폴더를 연다. (예사와 같이 만들었다면 C:\projects\my-project 이 폴더를 연다.)


### 2. 프로젝트 세팅.

#### CSS tailwind 세팅
```src/app```의 ```globals.css```에 **아래 코드를 남기고** 모두 삭제한다.

```css
/* ./src/app/globals.css */
@tailwind components;
@tailwind base;
@tailwind utilities;
```

#### ./src/app/page.tsx 세팅
해당 파일의 내용을 모두 삭제 하고 아래와 같이 빈 page를 만든다.
```tsx
export defualt function HomePage(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```

### 3. 페이지 라우팅

파일 트리
- ./src/app/
    - ./src/app/components
        - Navbar.tsx
    - ./src/app/family
        - page.tsx
    - ./src/app/board
        - page.tsx
    - page.tsx
    - layout.tsx
    - globals.tsx


<br/>

**./src/app/family/page.tsx**는 아래와 같이 만든다. 
```tsx
export defualt function FamilyPage(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```
<br/>

**Navbar.tsx**는 아래와 같이 만든다. 
```tsx
export defualt function Navbar(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```

<br/>

**./src/app/board/page.tsx**는 아래와 같이 ```"use client"```를 써서 client component로 만든다.
```tsx
"use client"
export defualt function BoardPage(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```