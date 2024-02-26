/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by vite-plugin-swagger2ts
export type 示例项目ComponentsSchemasTag = {
/**
 * @description 标签ID编号
 * @format int64
 **/
id: number;
/**
 * @description 标签名称
 **/
name: string;
};
export type 示例项目ComponentsSchemasCategory = {
/**
 * @description 分组ID编号
 * @format int64
 **/
id: number;
/**
 * @description 分组名称
 **/
name: string;
};
export type 示例项目ComponentsSchemasPet = {
/**
 * @description 宠物ID编号
 * @format int64
 **/
id: number;
/**
 * @description 分组
 **/
category: 示例项目ComponentsSchemasCategory;
/**
 * @description 名称
 * @example doggie
 **/
name: string;
/**
 * @description 照片URL
 **/
photoUrls: string[];
/**
 * @description 标签
 **/
tags: 示例项目ComponentsSchemasTag[];
/**
 * @description 宠物销售状态
 **/
status: "available" | "pending" | "sold";
};
export interface Paths示例项目{'/pet/{petId}': {get: {
param:{path: {
/**
 * @description 宠物 ID
 **/
petId: string;
};
}
/**
 * @description 成功
 **/
response: {
/**
 * @description 状态码
 **/
code: number;
/**
 * @description 宠物信息
 **/
data: 示例项目ComponentsSchemasPet;
};
};
delete: {
param:{path: {
/**
 * @description Pet id to delete
 **/
petId: string;
};
}
/**
 * @description 成功
 **/
response: {code: number;
};
};
};
'/pet': {post: {
param:{body: {
/**
 * @description 宠物名
 * @example Hello Kitty
 **/
name: string;
/**
 * @description 宠物销售状态
 * @example sold
 **/
status: string;
};
}
/**
 * @description 成功
 **/
response: {code: number;
/**
 * @description 宠物信息
 **/
data: 示例项目ComponentsSchemasPet;
};
};
put: {
param:{body: {[x: string | number]: any};
}
/**
 * @description 成功
 **/
response: {code: number;
/**
 * @description 宠物信息
 **/
data: 示例项目ComponentsSchemasPet;
};
};
};
'/pet/findByStatus': {get: {
param:{query: {
/**
 * @description Status values that need to be considered for filter
 **/
status: string;
};
}
/**
 * @description 成功
 **/
response: 示例项目ComponentsSchemasPet[];
};
};
}
export type Paths_Intersection = Paths示例项目