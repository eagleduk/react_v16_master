###React v16

1. Render() Return에 관한 기능
- 기존에는 render return 시 하나의 컴포넌트만 가능..
여러가지를 return하지 못해서 필요없는 최상위 컴포넌트안에 넣어서 리턴.. (예, span아니 div)

하지만 v16부터는 최상위 컴포넌트를 Fragment로 할 수 있다.. 
그냥 최상위에 넣기 위해 만들어진 컴포넌트인듯..
<Fragment></Fragment> 로도 사용가능하고 <></>로도 사용가능.
그냥 render() return은 Fragment로 시작하는게 제일 좋을듯.

- String type 리턴이 가능

여기서 컴포넌트란 html의 태그를 의미

2. portal
- react 를 호출하는 div ==> public/index.html 안의 div를 react 내에서 호출 가능하게 하는 기능.
react-dom 내의 createPortal을 이용하여 변경가능하다.
createPortal({컴포넌트}, {변경할 document element})
그리고 createPortal이 있는 컴포넌트를 실행해야 한다.

3. error boundaries
- 컴포넌트 하위의 컴포넌트 에러를 관리..
- componentDidCatch lifecycle을 이용하여 에러 내용과 정보를 확인 가능.. 또한 에러 컴포넌트만 제외 시킬수 있다.

4. Higher Order Component
- render시에 에러를 잡는 방법도 있지만, render전에 미리 컴포넌트가 정상 동작하는지, 에러가 있는지를 검사 하는 정도..?
- 최종 컴포넌트에서 에러 처리를 할 수도 있지만, 그렇게 되면 최종 컴포넌트의 코드가 복잡해 짐으로, 컴포넌트를 호출할 때 미리 에러 처리를 할 수 있다.

5. setting state null
- setState를 컴포넌트 내에서가 아닌 다른 function으로 분리할 수 있다. 이때, return 값이 null 이면 값을 업데이트 하지 않는다.