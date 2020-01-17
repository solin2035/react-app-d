

移动端适配    

屏幕宽带  @media screen   document.documentElement.clientWidth  100vw  

100%布局    弹性盒布局   

vw  / vh  / rem   /  em   布局  


rem   ===   根节点的字体大小    1rem = 100px 

其实 就是 等比缩放  

假定 设计稿 750px  假定  当前 html 字体大小  1rem = 100px;     2rem   

到时候 手机 设备宽 改变  得到 变化的  rem  

750: 100px =  375 : X  ==>   X = 375*100/750 = 50px;   50*2 = 100px

750: 100px =  320: X  ==>    X = 320*100/750 = 42.7px  42.7*2 = 85px

等比缩放

设计稿宽  跟 当前设计稿假定   的  rem  比例等于 当前手机设备的宽  和当前设备设备的rem 的比例 