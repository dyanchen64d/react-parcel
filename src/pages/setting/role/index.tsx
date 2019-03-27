/**
 * desc: 角色管理
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/22
 * Time: 下午1:42
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';
import {Button, Row, Col, Card, Divider, Radio, Icon, Input, message} from "antd";
import {queryRoleList, updateRole} from "@src/actions/role";

import "../style/role.scss";

const RadioGroup = Radio.Group;


class Role extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            isEdit: false,          // 是否编辑
            roles: []
        }
    }
    componentDidMount(){
        queryRoleList()
            .then((res:any) => {
                this.setState({roles:res})
            })
    }

    /**
     * 格式化状态
     */
    formatStatus = (status:number) => {
        const options = new Map([
            [1, '已开启'],
            [0, '未开启'],
        ]);
        return options.get(status) ? options.get(status) : '未知'
    };
    /**
     * 编辑
     */
    handleEdit = () => {
        this.setState({isEdit: true})
    };
    /**
     * 保存
     */
    handleSave = () => {
        if(!this.state.roles.some((item:any) => !item.roleName)){
            updateRole(this.state.roles).then((res:any) => {
                this.setState({isEdit: false});
                message.success('修改成功！')
            })
        }else{
            message.warning("请填写完整！")
        }

    };
    /**
     * 修改角色
     */
    handleChange = (value:string, index:number) => {
        this.setState({
            roles:[
                ...this.state.roles.slice(0, index),
                Object.assign({}, this.state.roles[index], {roleName: value}),
                ...this.state.roles.slice(index + 1)]
        })
    };
    handleRadio = (value:number, index:number) => {
        this.setState({
            roles:[
                ...this.state.roles.slice(0, index),
                Object.assign({}, this.state.roles[index], {isEnable: value}),
                ...this.state.roles.slice(index + 1)]
        })
    };
    /**
     *  添加角色
     */
    handleInsert = () => {
        this.setState({roles:[...this.state.roles, {
            roleName: "",
            isEnable: 0,
        }]})
    };
    render(){
        const {isEdit, roles} = this.state;
        return(
            <div className="role-manage">
                <PageHeader title="角色管理" subtitle={['首页','设置管理','角色管理']} />
                <div className={"role-manage-wrap"}>
                    {
                        !isEdit
                            ?<Button type="primary" onClick={this.handleEdit}>
                                编辑
                            </Button>
                            :<Button type="primary" onClick={this.handleSave}>
                                保存
                            </Button>
                    }

                </div>
                <Row className={"role-manage-wrap"}>
                    {
                        (roles || []).map((item:any, index:number) => (
                            <Col span={8} key={`role_${index}`}>
                                <Card className={"role-manage-card"} bordered={false}>
                                    <div className={"role-manage-card-title"}>
                                        {
                                            !isEdit
                                            ? item.roleName
                                            : <Input value={item.roleName} onChange={(e) => this.handleChange(e.target.value, index)}/>
                                        }
                                    </div>
                                    <Divider/>
                                    <div className={"role-manage-card-footer"}>
                                        <div>状态：</div>
                                        {
                                            isEdit
                                            ? (
                                                <RadioGroup onChange={(e:any) => this.handleRadio(e.target.value, index)} value={item.isEnable}>
                                                    <Radio value={0}>关闭</Radio>
                                                    <Radio value={1}>开启</Radio>
                                                </RadioGroup>
                                            )
                                            : <div className={"high-light"}>{this.formatStatus(item.isEnable)}</div>
                                        }
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }
                    {
                        isEdit && (
                            <Col span={8}>
                                <Card
                                    className={"role-manage-card"}
                                    bordered={false}
                                    onClick={this.handleInsert}
                                >
                                    <div className={"role-manage-card-plus"}>
                                        <Icon type="plus" />
                                    </div>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        )
    }
}

export {Role}