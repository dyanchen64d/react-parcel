/**
 * desc: 权限管理
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/22
 * Time: 下午3:00
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';
import {Button, Tree} from "antd";
import "../style/permission.scss";

const { TreeNode } = Tree;

const DEFAULT_TREE_NODE = [

];

class Permission extends React.Component<any, any>{
    handleSave = () => {

    };
    /**
     * 渲染树节点
     * @returns {React.ReactNode}
     */
    fields = ():React.ReactNode => {
        return <div></div>
    };
    render(){
        return(
            <div className="permission-manage">
                <PageHeader title="权限管理" subtitle={['首页','设置管理','权限管理']} />
                <div className="page-body">
                    <div className="permission-manage-wrap">

                        <div>
                            <Button type="primary" onClick={this.handleSave}>保存</Button>
                        </div>
                        <div >
                            <Tree>
                                {this.fields()}
                            </Tree>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export {Permission}