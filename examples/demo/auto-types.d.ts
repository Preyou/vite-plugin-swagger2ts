/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by vite-plugin-swagger2ts
import { Paths_Intersection } from './src/api/openApi.ts'

type FilterOptional<Source, Condition> = Pick<
  Source,
  {
    [K in keyof Source]: Source[K] extends Condition ? K : never;
  }[keyof Source]
>;

declare global {
  export namespace ExpProject {
    // get
    export type GetResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["get"]["response"];
    export type GetBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { get: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["get"]["param"]["body"];
    export type GetQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { get: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["get"]["param"]["query"];
    export type GetPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { get: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["get"]["param"]["path"];

    // put
    export type PutResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["put"]["response"];
    export type PutBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { put: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["put"]["param"]["body"];
    export type PutQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { put: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["put"]["param"]["query"];
    export type PutPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { put: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["put"]["param"]["path"];

    // post
    export type PostResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["post"]["response"];
    export type PostBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { post: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["post"]["param"]["body"];
    export type PostQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { post: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["post"]["param"]["query"];
    export type PostPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { post: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["post"]["param"]["path"];

    // delete
    export type DeleteResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["delete"]["response"];
    export type DeleteBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { delete: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["delete"]["param"]["body"];
    export type DeleteQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { delete: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["delete"]["param"]["query"];
    export type DeletePath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { delete: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["delete"]["param"]["path"];

    // options
    export type OptionsResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["options"]["response"];
    export type OptionsBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { options: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["options"]["param"]["body"];
    export type OptionsQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { options: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["options"]["param"]["query"];
    export type OptionsPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { options: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["options"]["param"]["path"];

    // head
    export type HeadResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["head"]["response"];
    export type HeadBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { head: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["head"]["param"]["body"];
    export type HeadQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { head: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["head"]["param"]["query"];
    export type HeadPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { head: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["head"]["param"]["path"];

    // patch
    export type PatchResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["patch"]["response"];
    export type PatchBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { patch: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["patch"]["param"]["body"];
    export type PatchQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { patch: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["patch"]["param"]["query"];
    export type PatchPath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { patch: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["patch"]["param"]["path"];

    // trace
    export type TraceResponse<T extends keyof Paths_Intersection> =
      Paths_Intersection[T]["trace"]["response"];
    export type TraceBody<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { trace: { param: { body: any } } }
      >,
    > = Paths_Intersection[T]["trace"]["param"]["body"];
    export type TraceQuery<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { trace: { param: { query: any } } }
      >,
    > = Paths_Intersection[T]["trace"]["param"]["query"];
    export type TracePath<
      T extends keyof FilterOptional<
        Paths_Intersection,
        { trace: { param: { path: any } } }
      >,
    > = Paths_Intersection[T]["trace"]["param"]["path"];
  }
}