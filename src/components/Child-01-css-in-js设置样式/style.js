// 使用css-in-js技术来定义样式
// 此技术方案，一般多用于自定义组件场景使用
import styled from 'styled-components'

// 此库，它是使用组件的方式来写子元素定义样式

// 定义一个样式组件
// styled.html标签
// 定义一个组件它的里面的内容是一个div，并且给此div赋值一个css样式，而且此样式还有作用域
export const ChildTitleStyle = styled.div`
  /* 样式 */
  color: red;
  font-size: 30px;
  font-weight: bold;
  /* 样式嵌套 */
  .title {
    color: #ccc;
    font-size: 16px;
  }
  .main {
    color: blue;
  }
`

// 继承
export const Btn = styled.button`
  color: red;
  height: 50px;
  line-height: 50px;
`
export const SuccessBtn = styled(Btn)`
  color: green;
  font-size: 30px;
`

// 属性传递
export const Btn2 = styled.button`
  /* 通过props可以向样式组件传递过来数据，从而实现动态配置 */
  color: ${props => props.color ?? 'red'};
  height: ${props => props.height ?? 50}px;
  line-height: ${props => props.height ?? 50}px;
`
