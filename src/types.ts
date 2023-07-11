import type { OpenAPIObject, SchemaObject } from "openapi3-ts";
import type { Plugin } from "vite";

type FormatSchema = (schema: SchemaObject) => SchemaObject;

interface Options {
    swaggerUrl: string;
    output?: string;
    formatDocs?: (docs: SwaggerDoc | OpenAPIObject) => typeof docs;
    formatSchema?: FormatSchema;
}

export interface UserOptions extends Options { };
export interface ResolvedOptions extends Options {
    output: string;
}

export type ExportPlugin = Plugin

export interface SwaggerSource {
    name: string;
    url: string;
    swaggerVersion: string;
    location: string;
}

export interface SwaggerDoc {
    basePath: string;
    swagger: string;
    paths: { [key: string]: any };
    definitions: { [key: string]: any };
    host: string;
    info: any;
    tags: any[];
    securityDefinitions: any;
}

export interface GenerateDocOption {
    docsName: string;
    baseUrl: string;
    formatSchema?: FormatSchema;
}
