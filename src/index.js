import BackTop from './components/backTop/backTop';
import Button from './components/button/button';
import Slides from './components/carousel/slides';
import SlidesItem from './components/carousel/slides-item';
import Cascader from './components/cascader/cascader';
import Collapse from './components/collapse/collapse';
import CollaspseItem from './components/collapse/collapseItem';
import DatePicker from './components/datepicker/datepicker';
import CheckBox from './components/formControls/checkbox';
import CheckBoxGroup from './components/formControls/checkboxGroup';
import Option from './components/formControls/option';
import Radio from './components/formControls/radio';
import RadioGroup from './components/formControls/radioGroup';
import Select from './components/formControls/select';
import Switch from './components/formControls/switch';
import Col from './components/grid/col';
import Row from './components/grid/row';
import Icon from './components/icon/Icon';
import Input from './components/input/Input';
import Content from './components/layout/content';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Layout from './components/layout/layout';
import Sider from './components/layout/sider';
import Nav from './components/nav/nav';
import NavItem from './components/nav/nav-item';
import SubNav from './components/nav/sub-nav';
import Pager from './components/pager/pager';
import Popover from './components/popover/popover';
import ProgressIndicator from './components/progressIndicator/progressIndicator';
import Scroll from './components/scroll/scroll';
import Sticky from './components/sticky/sticky';
import Table from './components/table/table';
import TableColumn from './components/table/table-column';
import Tabs from './components/tabs/tabs';
import TabsContent from './components/tabs/tabs-content';
import TabsItem from './components/tabs/tabs-item';
import TabsNav from './components/tabs/tabs-nav';
import TabsPanel from './components/tabs/tabs-panel';
// toast
import Tree from './components/tree/tree';
import Upload from './components/upload/upload';
import WaterFall from './components/waterFall/waterFall';

const componentsArray = [
  {component: BackTop, name: 'f-backtop'},
  {component: Button, name: 'f-button'},
  {component: Slides, name: 'f-slides'},
  {component: SlidesItem, name: 'f-slides-item'},
  {component: Cascader, name: 'f-cascader'},
  {component: Collapse, name: 'f-collapse'},
  {component: CollaspseItem, name: 'f-collapse-item'},
  {component: DatePicker, name: 'f-datepicker'},
  {component: CheckBox, name: 'f-checkbox'},
  {component: CheckBoxGroup, name: 'f-checkbox-group'},
  {component: Option, name: 'f-option'},
  {component: Radio, name: 'f-radio'},
  {component: RadioGroup, name: 'f-radio-group'},
  {component: Select, name: 'f-select'},
  {component: Switch, name: 'f-switch'},
  {component: Col, name: 'f-col'},
  {component: Row, name: 'f-row'},
  {component: Icon, name: 'f-icon'},
  {component: Input, name: 'f-input'},
  {component: Content, name: 'f-content'},
  {component: Footer, name: 'f-footer'},
  {component: Header, name: 'f-header'},
  {component: Layout, name: 'f-layout'},
  {component: Sider, name: 'f-sider'},
  {component: Nav, name: 'f-nav'},
  {component: NavItem, name: 'f-nav-item'},
  {component: SubNav, name: 'f-sub-nav'},
  {component: Pager, name: 'f-pager'},
  {component: Popover, name: 'f-popover'},
  {component: ProgressIndicator, name: 'f-progress-indicator'},
  {component: Scroll, name: 'f-scroll'},
  {component: Sticky, name: 'f-sticky'},
  {component: Table, name: 'f-table'},
  {component: TableColumn, name: 'f-table-column'},
  {component: Tabs, name: 'f-tabs'},
  {component: TabsContent, name: 'f-tabs-content'},
  {component: TabsItem, name: 'f-tabs-item'},
  {component: TabsNav, name: 'f-tabs-nav'},
  {component: TabsPanel, name: 'f-tabs-panel'},
  {component: Tree, name: 'f-tree'},
  {component: Upload, name: 'f-upload'},
  {component: WaterFall, name: 'f-waterfall'} 
];

const install = Vue => componentsArray.forEach(arr => Vue.component(arr.name, arr.component));

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use({install})
}

export {
  BackTop,
  Button,
  Slides,
  SlidesItem,
  Cascader,
  Collapse,
  CollaspseItem,
  DatePicker, 
  CheckBox, 
  CheckBoxGroup,
  Option,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Col,
  Row,
  Icon,
  Input,
  Content,
  Footer,
  Header,
  Layout,
  Sider,
  Nav,
  NavItem,
  SubNav,
  Pager,
  Popover,
  ProgressIndicator,
  Scroll,
  Sticky,
  Table,
  TableColumn,
  Tabs,
  TabsContent,
  TabsItem,
  TabsNav,
  TabsPanel,
  Tree,
  Upload,
  WaterFall,
};

export default {
  install
}

