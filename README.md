# 봉우리코더 2024 여름방학 숙제

1. [프로젝트 생성](#1-프로젝트-생성)
1. [프로젝트 세팅](#2-프로젝트-세팅)
1. [페이지 라우팅](#3-페이지-라우팅)
1. [Navbar.tsx](#4-navbartsx)

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
export default function HomePage(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```

### 3. 페이지 라우팅

**파일 트리**
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
export default function FamilyPage(){
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
export default function Navbar(){
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
export default function BoardPage(){
    // 여기에 typescript 코드를 작성한다.
    return(
        <>

        {/* 여기에 HTML 코드를 작성한다. */}
        
        </>
    )
}
```

### 4. Navbar.tsx 

**커스텀 컴포넌트** 만들고 사용하기.

**./src/app/components/Navbar.tsx**

- ```<nav></nav>```태그는 내비게이션 바를 나타내는 시멘틱 코드이다. 
- ```<a></a>``` 태그는 하이퍼링크를 나타내는 html 코드이다. 
    - ```<a href="url">*화면에 보여줄 하이퍼링크*</a>``` 
    - url에 절대 주소를 넣을 수도 있고 상대주소를 넣을 수도 있다. 절대 주소는 외부 링크에 쓴다.
    - 상대주소는 내 사이트의 상대 주소로 ```localhost:3000/home/myhome```과 같은 주소에서 localhost:3000 다음에 나오는 문자열, 그러니까 ```/home/myhome```과 같이 입력하면 된다. 참고로 홈페이지는 ```/```이다.
    - 링크를 클릭할 때 새창으로 띄우려면 ```target="none"```을 추가한다. (예시 ```<a href="http://www.naver.com" target="none">네이버링크</a>```)


```tsx
// Navbar.tsx
export default function Navbar(){
    return(
        <nav>
            <a href="/">Home</a>
            <a href="/family">Family</a>
            {/* Board 링크도 직접 만들어본다. */}
        </nav>
    )
}
```

**./src/app/layout.tsx**

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // 위에서 만든 Navbar를 import한다.

export const metadata: Metadata = {
  title: "타이틀", // 내가 쓰고 싶은 홈페이지 타이틀을 쓴다.
  description: "봉코더 여름방학 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        {/* 아래와 같이 Navbar를 삽입한다. */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
```

### 5. ./src/app/page.tsx (홈화면)
**HTML IMG 태그 ```<img/>```**
- ```<img/>``` 태그는 html 태그로 그림을 넣을 때 사용한다. 
- 그림의 주소를 ```<img src="주소"/>```와 같이 ```src="주소"```와 같이 입력한다.
- 그림의 주소가 외부링크일 경우 이미지의 주소를 입력하면 된다. (예시) ```<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5eHw6MFKUmkfySbkwtjvDTLSu7hyy4aG25eOXNEu3fWn9EAH3XGZKfAdHlROpWUAU2h-cJZZXZx_p4tmYr-Uj8rvD5f8cLUeq8mhdZFPdbiHZRc7rBOEe2pz76d3bF7YZyUFFHOHglckQ/s450/hikouki_kinai.png"/>```
- 그림을 내 사이트에 직접 넣고싶으면 ```./public```폴더 안에 그림 파일을 넣는다. 예를 들어 ```./public```폴더 안에 넣은 그림파일의 이름이 myimg.png라면 ```<img src="/public/myimg.png"/>```와 같이 추가한다.