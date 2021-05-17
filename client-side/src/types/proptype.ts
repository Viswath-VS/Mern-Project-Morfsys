interface loginProps {
    auth: any
  }
  interface buttonProps {
    name: string,
    className: string,
    path?: string,
    type?:any,
    formId?:string
  }
  interface cardProps {
    title: string;
    buttonName: string;
    Icon: any;
    iconName: string;
    ToolIcon: any;
    toolText: string;
    img: string;
    className: string;
    text: string;
    key: any;
  }
  interface inputFieldProps  {
    // label: string;
    // name: string;
    // placeholder: string;
    // type: string;
    Login: any
  };
  interface navBarProps {
    
}
interface homeProps {
  auth: any
}
interface sideNavProps{
  auth: any
}
  export {loginProps, buttonProps, cardProps, inputFieldProps, navBarProps, sideNavProps, homeProps}