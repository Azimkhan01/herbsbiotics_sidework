
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model product_images
 * 
 */
export type product_images = $Result.DefaultSelection<Prisma.$product_imagesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model recommended_products
 * 
 */
export type recommended_products = $Result.DefaultSelection<Prisma.$recommended_productsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_images`: Exposes CRUD operations for the **product_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_images.findMany()
    * ```
    */
  get product_images(): Prisma.product_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommended_products`: Exposes CRUD operations for the **recommended_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommended_products
    * const recommended_products = await prisma.recommended_products.findMany()
    * ```
    */
  get recommended_products(): Prisma.recommended_productsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    product_images: 'product_images',
    products: 'products',
    recommended_products: 'recommended_products'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "product_images" | "products" | "recommended_products"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      product_images: {
        payload: Prisma.$product_imagesPayload<ExtArgs>
        fields: Prisma.product_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findFirst: {
            args: Prisma.product_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findMany: {
            args: Prisma.product_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          create: {
            args: Prisma.product_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          createMany: {
            args: Prisma.product_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          delete: {
            args: Prisma.product_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          update: {
            args: Prisma.product_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          deleteMany: {
            args: Prisma.product_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          upsert: {
            args: Prisma.product_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          aggregate: {
            args: Prisma.Product_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_images>
          }
          groupBy: {
            args: Prisma.product_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      recommended_products: {
        payload: Prisma.$recommended_productsPayload<ExtArgs>
        fields: Prisma.recommended_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recommended_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recommended_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          findFirst: {
            args: Prisma.recommended_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recommended_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          findMany: {
            args: Prisma.recommended_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>[]
          }
          create: {
            args: Prisma.recommended_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          createMany: {
            args: Prisma.recommended_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recommended_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>[]
          }
          delete: {
            args: Prisma.recommended_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          update: {
            args: Prisma.recommended_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          deleteMany: {
            args: Prisma.recommended_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recommended_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recommended_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>[]
          }
          upsert: {
            args: Prisma.recommended_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommended_productsPayload>
          }
          aggregate: {
            args: Prisma.Recommended_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommended_products>
          }
          groupBy: {
            args: Prisma.recommended_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recommended_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.recommended_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Recommended_productsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    product_images?: product_imagesOmit
    products?: productsOmit
    recommended_products?: recommended_productsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_images: number
    recommended_products: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs
    recommended_products?: boolean | ProductsCountOutputTypeCountRecommended_productsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountRecommended_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommended_productsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: string | null
    category_name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: string | null
    category_name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: string
    category_name: string
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: string
      category_name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'String'>
    readonly category_name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model product_images
   */

  export type AggregateProduct_images = {
    _count: Product_imagesCountAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  export type Product_imagesMinAggregateOutputType = {
    id: string | null
    url: string | null
    productId: string | null
  }

  export type Product_imagesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    productId: string | null
  }

  export type Product_imagesCountAggregateOutputType = {
    id: number
    url: number
    productId: number
    _all: number
  }


  export type Product_imagesMinAggregateInputType = {
    id?: true
    url?: true
    productId?: true
  }

  export type Product_imagesMaxAggregateInputType = {
    id?: true
    url?: true
    productId?: true
  }

  export type Product_imagesCountAggregateInputType = {
    id?: true
    url?: true
    productId?: true
    _all?: true
  }

  export type Product_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to aggregate.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imagesMaxAggregateInputType
  }

  export type GetProduct_imagesAggregateType<T extends Product_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_images[P]>
      : GetScalarType<T[P], AggregateProduct_images[P]>
  }




  export type product_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithAggregationInput | product_imagesOrderByWithAggregationInput[]
    by: Product_imagesScalarFieldEnum[] | Product_imagesScalarFieldEnum
    having?: product_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imagesCountAggregateInputType | true
    _min?: Product_imagesMinAggregateInputType
    _max?: Product_imagesMaxAggregateInputType
  }

  export type Product_imagesGroupByOutputType = {
    id: string
    url: string
    productId: string
    _count: Product_imagesCountAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  type GetProduct_imagesGroupByPayload<T extends product_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
        }
      >
    >


  export type product_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectScalar = {
    id?: boolean
    url?: boolean
    productId?: boolean
  }

  export type product_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "productId", ExtArgs["result"]["product_images"]>
  export type product_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_images"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      productId: string
    }, ExtArgs["result"]["product_images"]>
    composites: {}
  }

  type product_imagesGetPayload<S extends boolean | null | undefined | product_imagesDefaultArgs> = $Result.GetResult<Prisma.$product_imagesPayload, S>

  type product_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_imagesCountAggregateInputType | true
    }

  export interface product_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_images'], meta: { name: 'product_images' } }
    /**
     * Find zero or one Product_images that matches the filter.
     * @param {product_imagesFindUniqueArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_imagesFindUniqueArgs>(args: SelectSubset<T, product_imagesFindUniqueArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_imagesFindUniqueOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_imagesFindFirstArgs>(args?: SelectSubset<T, product_imagesFindFirstArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_images.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_imagesFindManyArgs>(args?: SelectSubset<T, product_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_images.
     * @param {product_imagesCreateArgs} args - Arguments to create a Product_images.
     * @example
     * // Create one Product_images
     * const Product_images = await prisma.product_images.create({
     *   data: {
     *     // ... data to create a Product_images
     *   }
     * })
     * 
     */
    create<T extends product_imagesCreateArgs>(args: SelectSubset<T, product_imagesCreateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_images.
     * @param {product_imagesCreateManyArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_imagesCreateManyArgs>(args?: SelectSubset<T, product_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_images and returns the data saved in the database.
     * @param {product_imagesCreateManyAndReturnArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_images.
     * @param {product_imagesDeleteArgs} args - Arguments to delete one Product_images.
     * @example
     * // Delete one Product_images
     * const Product_images = await prisma.product_images.delete({
     *   where: {
     *     // ... filter to delete one Product_images
     *   }
     * })
     * 
     */
    delete<T extends product_imagesDeleteArgs>(args: SelectSubset<T, product_imagesDeleteArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_images.
     * @param {product_imagesUpdateArgs} args - Arguments to update one Product_images.
     * @example
     * // Update one Product_images
     * const product_images = await prisma.product_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_imagesUpdateArgs>(args: SelectSubset<T, product_imagesUpdateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_images.
     * @param {product_imagesDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_imagesDeleteManyArgs>(args?: SelectSubset<T, product_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_imagesUpdateManyArgs>(args: SelectSubset<T, product_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images and returns the data updated in the database.
     * @param {product_imagesUpdateManyAndReturnArgs} args - Arguments to update many Product_images.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_images.
     * @param {product_imagesUpsertArgs} args - Arguments to update or create a Product_images.
     * @example
     * // Update or create a Product_images
     * const product_images = await prisma.product_images.upsert({
     *   create: {
     *     // ... data to create a Product_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_images we want to update
     *   }
     * })
     */
    upsert<T extends product_imagesUpsertArgs>(args: SelectSubset<T, product_imagesUpsertArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_images.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imagesCountArgs>(
      args?: Subset<T, product_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_imagesAggregateArgs>(args: Subset<T, Product_imagesAggregateArgs>): Prisma.PrismaPromise<GetProduct_imagesAggregateType<T>>

    /**
     * Group by Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imagesGroupByArgs['orderBy'] }
        : { orderBy?: product_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_images model
   */
  readonly fields: product_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_images model
   */
  interface product_imagesFieldRefs {
    readonly id: FieldRef<"product_images", 'String'>
    readonly url: FieldRef<"product_images", 'String'>
    readonly productId: FieldRef<"product_images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_images findUnique
   */
  export type product_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findUniqueOrThrow
   */
  export type product_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findFirst
   */
  export type product_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findFirstOrThrow
   */
  export type product_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findMany
   */
  export type product_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images create
   */
  export type product_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_images.
     */
    data: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
  }

  /**
   * product_images createMany
   */
  export type product_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_images createManyAndReturn
   */
  export type product_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images update
   */
  export type product_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_images.
     */
    data: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
    /**
     * Choose, which product_images to update.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images updateMany
   */
  export type product_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
  }

  /**
   * product_images updateManyAndReturn
   */
  export type product_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images upsert
   */
  export type product_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_images to update in case it exists.
     */
    where: product_imagesWhereUniqueInput
    /**
     * In case the product_images found by the `where` argument doesn't exist, create a new product_images with this data.
     */
    create: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
    /**
     * In case the product_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
  }

  /**
   * product_images delete
   */
  export type product_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter which product_images to delete.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images deleteMany
   */
  export type product_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to delete.
     */
    limit?: number
  }

  /**
   * product_images without action
   */
  export type product_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    Extract_Name: string | null
    Botanical_Name: string | null
    Part_Used: string | null
    Typical_Extraction_Ratio: string | null
    Active_Compound: string | null
    Primary_Benefit: string | null
    Unit_in_Order: string | null
    Package_Size: string | null
    appearance: string | null
    Category: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    Extract_Name: string | null
    Botanical_Name: string | null
    Part_Used: string | null
    Typical_Extraction_Ratio: string | null
    Active_Compound: string | null
    Primary_Benefit: string | null
    Unit_in_Order: string | null
    Package_Size: string | null
    appearance: string | null
    Category: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    Extract_Name: number
    Botanical_Name: number
    Part_Used: number
    Typical_Extraction_Ratio: number
    Active_Compound: number
    Primary_Benefit: number
    Unit_in_Order: number
    Package_Size: number
    appearance: number
    Category: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    id?: true
    Extract_Name?: true
    Botanical_Name?: true
    Part_Used?: true
    Typical_Extraction_Ratio?: true
    Active_Compound?: true
    Primary_Benefit?: true
    Unit_in_Order?: true
    Package_Size?: true
    appearance?: true
    Category?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    Extract_Name?: true
    Botanical_Name?: true
    Part_Used?: true
    Typical_Extraction_Ratio?: true
    Active_Compound?: true
    Primary_Benefit?: true
    Unit_in_Order?: true
    Package_Size?: true
    appearance?: true
    Category?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    Extract_Name?: true
    Botanical_Name?: true
    Part_Used?: true
    Typical_Extraction_Ratio?: true
    Active_Compound?: true
    Primary_Benefit?: true
    Unit_in_Order?: true
    Package_Size?: true
    appearance?: true
    Category?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    Extract_Name: string
    Botanical_Name: string | null
    Part_Used: string | null
    Typical_Extraction_Ratio: string | null
    Active_Compound: string | null
    Primary_Benefit: string | null
    Unit_in_Order: string | null
    Package_Size: string | null
    appearance: string | null
    Category: string
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Extract_Name?: boolean
    Botanical_Name?: boolean
    Part_Used?: boolean
    Typical_Extraction_Ratio?: boolean
    Active_Compound?: boolean
    Primary_Benefit?: boolean
    Unit_in_Order?: boolean
    Package_Size?: boolean
    appearance?: boolean
    Category?: boolean
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recommended_products?: boolean | products$recommended_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Extract_Name?: boolean
    Botanical_Name?: boolean
    Part_Used?: boolean
    Typical_Extraction_Ratio?: boolean
    Active_Compound?: boolean
    Primary_Benefit?: boolean
    Unit_in_Order?: boolean
    Package_Size?: boolean
    appearance?: boolean
    Category?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Extract_Name?: boolean
    Botanical_Name?: boolean
    Part_Used?: boolean
    Typical_Extraction_Ratio?: boolean
    Active_Compound?: boolean
    Primary_Benefit?: boolean
    Unit_in_Order?: boolean
    Package_Size?: boolean
    appearance?: boolean
    Category?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    Extract_Name?: boolean
    Botanical_Name?: boolean
    Part_Used?: boolean
    Typical_Extraction_Ratio?: boolean
    Active_Compound?: boolean
    Primary_Benefit?: boolean
    Unit_in_Order?: boolean
    Package_Size?: boolean
    appearance?: boolean
    Category?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Extract_Name" | "Botanical_Name" | "Part_Used" | "Typical_Extraction_Ratio" | "Active_Compound" | "Primary_Benefit" | "Unit_in_Order" | "Package_Size" | "appearance" | "Category", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recommended_products?: boolean | products$recommended_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      product_images: Prisma.$product_imagesPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
      recommended_products: Prisma.$recommended_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Extract_Name: string
      Botanical_Name: string | null
      Part_Used: string | null
      Typical_Extraction_Ratio: string | null
      Active_Compound: string | null
      Primary_Benefit: string | null
      Unit_in_Order: string | null
      Package_Size: string | null
      appearance: string | null
      Category: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_images<T extends products$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recommended_products<T extends products$recommended_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$recommended_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly Extract_Name: FieldRef<"products", 'String'>
    readonly Botanical_Name: FieldRef<"products", 'String'>
    readonly Part_Used: FieldRef<"products", 'String'>
    readonly Typical_Extraction_Ratio: FieldRef<"products", 'String'>
    readonly Active_Compound: FieldRef<"products", 'String'>
    readonly Primary_Benefit: FieldRef<"products", 'String'>
    readonly Unit_in_Order: FieldRef<"products", 'String'>
    readonly Package_Size: FieldRef<"products", 'String'>
    readonly appearance: FieldRef<"products", 'String'>
    readonly Category: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_images
   */
  export type products$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    cursor?: product_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * products.recommended_products
   */
  export type products$recommended_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    where?: recommended_productsWhereInput
    orderBy?: recommended_productsOrderByWithRelationInput | recommended_productsOrderByWithRelationInput[]
    cursor?: recommended_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommended_productsScalarFieldEnum | Recommended_productsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model recommended_products
   */

  export type AggregateRecommended_products = {
    _count: Recommended_productsCountAggregateOutputType | null
    _min: Recommended_productsMinAggregateOutputType | null
    _max: Recommended_productsMaxAggregateOutputType | null
  }

  export type Recommended_productsMinAggregateOutputType = {
    id: string | null
    productId: string | null
  }

  export type Recommended_productsMaxAggregateOutputType = {
    id: string | null
    productId: string | null
  }

  export type Recommended_productsCountAggregateOutputType = {
    id: number
    productId: number
    _all: number
  }


  export type Recommended_productsMinAggregateInputType = {
    id?: true
    productId?: true
  }

  export type Recommended_productsMaxAggregateInputType = {
    id?: true
    productId?: true
  }

  export type Recommended_productsCountAggregateInputType = {
    id?: true
    productId?: true
    _all?: true
  }

  export type Recommended_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommended_products to aggregate.
     */
    where?: recommended_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommended_products to fetch.
     */
    orderBy?: recommended_productsOrderByWithRelationInput | recommended_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recommended_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommended_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommended_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recommended_products
    **/
    _count?: true | Recommended_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recommended_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recommended_productsMaxAggregateInputType
  }

  export type GetRecommended_productsAggregateType<T extends Recommended_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommended_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommended_products[P]>
      : GetScalarType<T[P], AggregateRecommended_products[P]>
  }




  export type recommended_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommended_productsWhereInput
    orderBy?: recommended_productsOrderByWithAggregationInput | recommended_productsOrderByWithAggregationInput[]
    by: Recommended_productsScalarFieldEnum[] | Recommended_productsScalarFieldEnum
    having?: recommended_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recommended_productsCountAggregateInputType | true
    _min?: Recommended_productsMinAggregateInputType
    _max?: Recommended_productsMaxAggregateInputType
  }

  export type Recommended_productsGroupByOutputType = {
    id: string
    productId: string
    _count: Recommended_productsCountAggregateOutputType | null
    _min: Recommended_productsMinAggregateOutputType | null
    _max: Recommended_productsMaxAggregateOutputType | null
  }

  type GetRecommended_productsGroupByPayload<T extends recommended_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recommended_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recommended_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recommended_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Recommended_productsGroupByOutputType[P]>
        }
      >
    >


  export type recommended_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommended_products"]>

  export type recommended_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommended_products"]>

  export type recommended_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommended_products"]>

  export type recommended_productsSelectScalar = {
    id?: boolean
    productId?: boolean
  }

  export type recommended_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId", ExtArgs["result"]["recommended_products"]>
  export type recommended_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type recommended_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type recommended_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $recommended_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recommended_products"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
    }, ExtArgs["result"]["recommended_products"]>
    composites: {}
  }

  type recommended_productsGetPayload<S extends boolean | null | undefined | recommended_productsDefaultArgs> = $Result.GetResult<Prisma.$recommended_productsPayload, S>

  type recommended_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recommended_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recommended_productsCountAggregateInputType | true
    }

  export interface recommended_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recommended_products'], meta: { name: 'recommended_products' } }
    /**
     * Find zero or one Recommended_products that matches the filter.
     * @param {recommended_productsFindUniqueArgs} args - Arguments to find a Recommended_products
     * @example
     * // Get one Recommended_products
     * const recommended_products = await prisma.recommended_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recommended_productsFindUniqueArgs>(args: SelectSubset<T, recommended_productsFindUniqueArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommended_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recommended_productsFindUniqueOrThrowArgs} args - Arguments to find a Recommended_products
     * @example
     * // Get one Recommended_products
     * const recommended_products = await prisma.recommended_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recommended_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, recommended_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommended_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsFindFirstArgs} args - Arguments to find a Recommended_products
     * @example
     * // Get one Recommended_products
     * const recommended_products = await prisma.recommended_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recommended_productsFindFirstArgs>(args?: SelectSubset<T, recommended_productsFindFirstArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommended_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsFindFirstOrThrowArgs} args - Arguments to find a Recommended_products
     * @example
     * // Get one Recommended_products
     * const recommended_products = await prisma.recommended_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recommended_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, recommended_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommended_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommended_products
     * const recommended_products = await prisma.recommended_products.findMany()
     * 
     * // Get first 10 Recommended_products
     * const recommended_products = await prisma.recommended_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommended_productsWithIdOnly = await prisma.recommended_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recommended_productsFindManyArgs>(args?: SelectSubset<T, recommended_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommended_products.
     * @param {recommended_productsCreateArgs} args - Arguments to create a Recommended_products.
     * @example
     * // Create one Recommended_products
     * const Recommended_products = await prisma.recommended_products.create({
     *   data: {
     *     // ... data to create a Recommended_products
     *   }
     * })
     * 
     */
    create<T extends recommended_productsCreateArgs>(args: SelectSubset<T, recommended_productsCreateArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommended_products.
     * @param {recommended_productsCreateManyArgs} args - Arguments to create many Recommended_products.
     * @example
     * // Create many Recommended_products
     * const recommended_products = await prisma.recommended_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recommended_productsCreateManyArgs>(args?: SelectSubset<T, recommended_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommended_products and returns the data saved in the database.
     * @param {recommended_productsCreateManyAndReturnArgs} args - Arguments to create many Recommended_products.
     * @example
     * // Create many Recommended_products
     * const recommended_products = await prisma.recommended_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommended_products and only return the `id`
     * const recommended_productsWithIdOnly = await prisma.recommended_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recommended_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, recommended_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommended_products.
     * @param {recommended_productsDeleteArgs} args - Arguments to delete one Recommended_products.
     * @example
     * // Delete one Recommended_products
     * const Recommended_products = await prisma.recommended_products.delete({
     *   where: {
     *     // ... filter to delete one Recommended_products
     *   }
     * })
     * 
     */
    delete<T extends recommended_productsDeleteArgs>(args: SelectSubset<T, recommended_productsDeleteArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommended_products.
     * @param {recommended_productsUpdateArgs} args - Arguments to update one Recommended_products.
     * @example
     * // Update one Recommended_products
     * const recommended_products = await prisma.recommended_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recommended_productsUpdateArgs>(args: SelectSubset<T, recommended_productsUpdateArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommended_products.
     * @param {recommended_productsDeleteManyArgs} args - Arguments to filter Recommended_products to delete.
     * @example
     * // Delete a few Recommended_products
     * const { count } = await prisma.recommended_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recommended_productsDeleteManyArgs>(args?: SelectSubset<T, recommended_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommended_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommended_products
     * const recommended_products = await prisma.recommended_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recommended_productsUpdateManyArgs>(args: SelectSubset<T, recommended_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommended_products and returns the data updated in the database.
     * @param {recommended_productsUpdateManyAndReturnArgs} args - Arguments to update many Recommended_products.
     * @example
     * // Update many Recommended_products
     * const recommended_products = await prisma.recommended_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommended_products and only return the `id`
     * const recommended_productsWithIdOnly = await prisma.recommended_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recommended_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, recommended_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommended_products.
     * @param {recommended_productsUpsertArgs} args - Arguments to update or create a Recommended_products.
     * @example
     * // Update or create a Recommended_products
     * const recommended_products = await prisma.recommended_products.upsert({
     *   create: {
     *     // ... data to create a Recommended_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommended_products we want to update
     *   }
     * })
     */
    upsert<T extends recommended_productsUpsertArgs>(args: SelectSubset<T, recommended_productsUpsertArgs<ExtArgs>>): Prisma__recommended_productsClient<$Result.GetResult<Prisma.$recommended_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommended_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsCountArgs} args - Arguments to filter Recommended_products to count.
     * @example
     * // Count the number of Recommended_products
     * const count = await prisma.recommended_products.count({
     *   where: {
     *     // ... the filter for the Recommended_products we want to count
     *   }
     * })
    **/
    count<T extends recommended_productsCountArgs>(
      args?: Subset<T, recommended_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recommended_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommended_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recommended_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recommended_productsAggregateArgs>(args: Subset<T, Recommended_productsAggregateArgs>): Prisma.PrismaPromise<GetRecommended_productsAggregateType<T>>

    /**
     * Group by Recommended_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommended_productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recommended_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recommended_productsGroupByArgs['orderBy'] }
        : { orderBy?: recommended_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recommended_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommended_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recommended_products model
   */
  readonly fields: recommended_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recommended_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recommended_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recommended_products model
   */
  interface recommended_productsFieldRefs {
    readonly id: FieldRef<"recommended_products", 'String'>
    readonly productId: FieldRef<"recommended_products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * recommended_products findUnique
   */
  export type recommended_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter, which recommended_products to fetch.
     */
    where: recommended_productsWhereUniqueInput
  }

  /**
   * recommended_products findUniqueOrThrow
   */
  export type recommended_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter, which recommended_products to fetch.
     */
    where: recommended_productsWhereUniqueInput
  }

  /**
   * recommended_products findFirst
   */
  export type recommended_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter, which recommended_products to fetch.
     */
    where?: recommended_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommended_products to fetch.
     */
    orderBy?: recommended_productsOrderByWithRelationInput | recommended_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommended_products.
     */
    cursor?: recommended_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommended_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommended_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommended_products.
     */
    distinct?: Recommended_productsScalarFieldEnum | Recommended_productsScalarFieldEnum[]
  }

  /**
   * recommended_products findFirstOrThrow
   */
  export type recommended_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter, which recommended_products to fetch.
     */
    where?: recommended_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommended_products to fetch.
     */
    orderBy?: recommended_productsOrderByWithRelationInput | recommended_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommended_products.
     */
    cursor?: recommended_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommended_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommended_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommended_products.
     */
    distinct?: Recommended_productsScalarFieldEnum | Recommended_productsScalarFieldEnum[]
  }

  /**
   * recommended_products findMany
   */
  export type recommended_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter, which recommended_products to fetch.
     */
    where?: recommended_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommended_products to fetch.
     */
    orderBy?: recommended_productsOrderByWithRelationInput | recommended_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recommended_products.
     */
    cursor?: recommended_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommended_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommended_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommended_products.
     */
    distinct?: Recommended_productsScalarFieldEnum | Recommended_productsScalarFieldEnum[]
  }

  /**
   * recommended_products create
   */
  export type recommended_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a recommended_products.
     */
    data: XOR<recommended_productsCreateInput, recommended_productsUncheckedCreateInput>
  }

  /**
   * recommended_products createMany
   */
  export type recommended_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recommended_products.
     */
    data: recommended_productsCreateManyInput | recommended_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recommended_products createManyAndReturn
   */
  export type recommended_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * The data used to create many recommended_products.
     */
    data: recommended_productsCreateManyInput | recommended_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recommended_products update
   */
  export type recommended_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a recommended_products.
     */
    data: XOR<recommended_productsUpdateInput, recommended_productsUncheckedUpdateInput>
    /**
     * Choose, which recommended_products to update.
     */
    where: recommended_productsWhereUniqueInput
  }

  /**
   * recommended_products updateMany
   */
  export type recommended_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recommended_products.
     */
    data: XOR<recommended_productsUpdateManyMutationInput, recommended_productsUncheckedUpdateManyInput>
    /**
     * Filter which recommended_products to update
     */
    where?: recommended_productsWhereInput
    /**
     * Limit how many recommended_products to update.
     */
    limit?: number
  }

  /**
   * recommended_products updateManyAndReturn
   */
  export type recommended_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * The data used to update recommended_products.
     */
    data: XOR<recommended_productsUpdateManyMutationInput, recommended_productsUncheckedUpdateManyInput>
    /**
     * Filter which recommended_products to update
     */
    where?: recommended_productsWhereInput
    /**
     * Limit how many recommended_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recommended_products upsert
   */
  export type recommended_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the recommended_products to update in case it exists.
     */
    where: recommended_productsWhereUniqueInput
    /**
     * In case the recommended_products found by the `where` argument doesn't exist, create a new recommended_products with this data.
     */
    create: XOR<recommended_productsCreateInput, recommended_productsUncheckedCreateInput>
    /**
     * In case the recommended_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recommended_productsUpdateInput, recommended_productsUncheckedUpdateInput>
  }

  /**
   * recommended_products delete
   */
  export type recommended_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
    /**
     * Filter which recommended_products to delete.
     */
    where: recommended_productsWhereUniqueInput
  }

  /**
   * recommended_products deleteMany
   */
  export type recommended_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommended_products to delete
     */
    where?: recommended_productsWhereInput
    /**
     * Limit how many recommended_products to delete.
     */
    limit?: number
  }

  /**
   * recommended_products without action
   */
  export type recommended_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommended_products
     */
    select?: recommended_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommended_products
     */
    omit?: recommended_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommended_productsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Product_imagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    productId: 'productId'
  };

  export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    Extract_Name: 'Extract_Name',
    Botanical_Name: 'Botanical_Name',
    Part_Used: 'Part_Used',
    Typical_Extraction_Ratio: 'Typical_Extraction_Ratio',
    Active_Compound: 'Active_Compound',
    Primary_Benefit: 'Primary_Benefit',
    Unit_in_Order: 'Unit_in_Order',
    Package_Size: 'Package_Size',
    appearance: 'appearance',
    Category: 'Category'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Recommended_productsScalarFieldEnum: {
    id: 'id',
    productId: 'productId'
  };

  export type Recommended_productsScalarFieldEnum = (typeof Recommended_productsScalarFieldEnum)[keyof typeof Recommended_productsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: StringFilter<"categories"> | string
    category_name?: StringFilter<"categories"> | string
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: string
    category_name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    products?: ProductsListRelationFilter
  }, "category_id" | "category_name">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: StringWithAggregatesFilter<"categories"> | string
    category_name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type product_imagesWhereInput = {
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    id?: StringFilter<"product_images"> | string
    url?: StringFilter<"product_images"> | string
    productId?: StringFilter<"product_images"> | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_imagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    url?: StringFilter<"product_images"> | string
    productId?: StringFilter<"product_images"> | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type product_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    _count?: product_imagesCountOrderByAggregateInput
    _max?: product_imagesMaxOrderByAggregateInput
    _min?: product_imagesMinOrderByAggregateInput
  }

  export type product_imagesScalarWhereWithAggregatesInput = {
    AND?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    OR?: product_imagesScalarWhereWithAggregatesInput[]
    NOT?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product_images"> | string
    url?: StringWithAggregatesFilter<"product_images"> | string
    productId?: StringWithAggregatesFilter<"product_images"> | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    Extract_Name?: StringFilter<"products"> | string
    Botanical_Name?: StringNullableFilter<"products"> | string | null
    Part_Used?: StringNullableFilter<"products"> | string | null
    Typical_Extraction_Ratio?: StringNullableFilter<"products"> | string | null
    Active_Compound?: StringNullableFilter<"products"> | string | null
    Primary_Benefit?: StringNullableFilter<"products"> | string | null
    Unit_in_Order?: StringNullableFilter<"products"> | string | null
    Package_Size?: StringNullableFilter<"products"> | string | null
    appearance?: StringNullableFilter<"products"> | string | null
    Category?: StringFilter<"products"> | string
    product_images?: Product_imagesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    recommended_products?: Recommended_productsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    Extract_Name?: SortOrder
    Botanical_Name?: SortOrderInput | SortOrder
    Part_Used?: SortOrderInput | SortOrder
    Typical_Extraction_Ratio?: SortOrderInput | SortOrder
    Active_Compound?: SortOrderInput | SortOrder
    Primary_Benefit?: SortOrderInput | SortOrder
    Unit_in_Order?: SortOrderInput | SortOrder
    Package_Size?: SortOrderInput | SortOrder
    appearance?: SortOrderInput | SortOrder
    Category?: SortOrder
    product_images?: product_imagesOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    recommended_products?: recommended_productsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    Extract_Name?: StringFilter<"products"> | string
    Botanical_Name?: StringNullableFilter<"products"> | string | null
    Part_Used?: StringNullableFilter<"products"> | string | null
    Typical_Extraction_Ratio?: StringNullableFilter<"products"> | string | null
    Active_Compound?: StringNullableFilter<"products"> | string | null
    Primary_Benefit?: StringNullableFilter<"products"> | string | null
    Unit_in_Order?: StringNullableFilter<"products"> | string | null
    Package_Size?: StringNullableFilter<"products"> | string | null
    appearance?: StringNullableFilter<"products"> | string | null
    Category?: StringFilter<"products"> | string
    product_images?: Product_imagesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    recommended_products?: Recommended_productsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    Extract_Name?: SortOrder
    Botanical_Name?: SortOrderInput | SortOrder
    Part_Used?: SortOrderInput | SortOrder
    Typical_Extraction_Ratio?: SortOrderInput | SortOrder
    Active_Compound?: SortOrderInput | SortOrder
    Primary_Benefit?: SortOrderInput | SortOrder
    Unit_in_Order?: SortOrderInput | SortOrder
    Package_Size?: SortOrderInput | SortOrder
    appearance?: SortOrderInput | SortOrder
    Category?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    Extract_Name?: StringWithAggregatesFilter<"products"> | string
    Botanical_Name?: StringNullableWithAggregatesFilter<"products"> | string | null
    Part_Used?: StringNullableWithAggregatesFilter<"products"> | string | null
    Typical_Extraction_Ratio?: StringNullableWithAggregatesFilter<"products"> | string | null
    Active_Compound?: StringNullableWithAggregatesFilter<"products"> | string | null
    Primary_Benefit?: StringNullableWithAggregatesFilter<"products"> | string | null
    Unit_in_Order?: StringNullableWithAggregatesFilter<"products"> | string | null
    Package_Size?: StringNullableWithAggregatesFilter<"products"> | string | null
    appearance?: StringNullableWithAggregatesFilter<"products"> | string | null
    Category?: StringWithAggregatesFilter<"products"> | string
  }

  export type recommended_productsWhereInput = {
    AND?: recommended_productsWhereInput | recommended_productsWhereInput[]
    OR?: recommended_productsWhereInput[]
    NOT?: recommended_productsWhereInput | recommended_productsWhereInput[]
    id?: StringFilter<"recommended_products"> | string
    productId?: StringFilter<"recommended_products"> | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type recommended_productsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type recommended_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: recommended_productsWhereInput | recommended_productsWhereInput[]
    OR?: recommended_productsWhereInput[]
    NOT?: recommended_productsWhereInput | recommended_productsWhereInput[]
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id" | "productId">

  export type recommended_productsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    _count?: recommended_productsCountOrderByAggregateInput
    _max?: recommended_productsMaxOrderByAggregateInput
    _min?: recommended_productsMinOrderByAggregateInput
  }

  export type recommended_productsScalarWhereWithAggregatesInput = {
    AND?: recommended_productsScalarWhereWithAggregatesInput | recommended_productsScalarWhereWithAggregatesInput[]
    OR?: recommended_productsScalarWhereWithAggregatesInput[]
    NOT?: recommended_productsScalarWhereWithAggregatesInput | recommended_productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"recommended_products"> | string
    productId?: StringWithAggregatesFilter<"recommended_products"> | string
  }

  export type categoriesCreateInput = {
    category_id: string
    category_name: string
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id: string
    category_name: string
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id: string
    category_name: string
  }

  export type categoriesUpdateManyMutationInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesCreateInput = {
    id: string
    url: string
    products: productsCreateNestedOneWithoutProduct_imagesInput
  }

  export type product_imagesUncheckedCreateInput = {
    id: string
    url: string
    productId: string
  }

  export type product_imagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateOneRequiredWithoutProduct_imagesNestedInput
  }

  export type product_imagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesCreateManyInput = {
    id: string
    url: string
    productId: string
  }

  export type product_imagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    recommended_products?: recommended_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    Category: string
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    recommended_products?: recommended_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    recommended_products?: recommended_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: StringFieldUpdateOperationsInput | string
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    recommended_products?: recommended_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    Category: string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsCreateInput = {
    id: string
    products: productsCreateNestedOneWithoutRecommended_productsInput
  }

  export type recommended_productsUncheckedCreateInput = {
    id: string
    productId: string
  }

  export type recommended_productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateOneRequiredWithoutRecommended_productsNestedInput
  }

  export type recommended_productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsCreateManyInput = {
    id: string
    productId: string
  }

  export type recommended_productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type product_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type product_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type product_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Product_imagesListRelationFilter = {
    every?: product_imagesWhereInput
    some?: product_imagesWhereInput
    none?: product_imagesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type Recommended_productsListRelationFilter = {
    every?: recommended_productsWhereInput
    some?: recommended_productsWhereInput
    none?: recommended_productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type product_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recommended_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    Extract_Name?: SortOrder
    Botanical_Name?: SortOrder
    Part_Used?: SortOrder
    Typical_Extraction_Ratio?: SortOrder
    Active_Compound?: SortOrder
    Primary_Benefit?: SortOrder
    Unit_in_Order?: SortOrder
    Package_Size?: SortOrder
    appearance?: SortOrder
    Category?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    Extract_Name?: SortOrder
    Botanical_Name?: SortOrder
    Part_Used?: SortOrder
    Typical_Extraction_Ratio?: SortOrder
    Active_Compound?: SortOrder
    Primary_Benefit?: SortOrder
    Unit_in_Order?: SortOrder
    Package_Size?: SortOrder
    appearance?: SortOrder
    Category?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    Extract_Name?: SortOrder
    Botanical_Name?: SortOrder
    Part_Used?: SortOrder
    Typical_Extraction_Ratio?: SortOrder
    Active_Compound?: SortOrder
    Primary_Benefit?: SortOrder
    Unit_in_Order?: SortOrder
    Package_Size?: SortOrder
    appearance?: SortOrder
    Category?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type recommended_productsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type recommended_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type recommended_productsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    upsert?: productsUpsertWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_imagesInput, productsUpdateWithoutProduct_imagesInput>, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type product_imagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type recommended_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput> | recommended_productsCreateWithoutProductsInput[] | recommended_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recommended_productsCreateOrConnectWithoutProductsInput | recommended_productsCreateOrConnectWithoutProductsInput[]
    createMany?: recommended_productsCreateManyProductsInputEnvelope
    connect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
  }

  export type product_imagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type recommended_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput> | recommended_productsCreateWithoutProductsInput[] | recommended_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recommended_productsCreateOrConnectWithoutProductsInput | recommended_productsCreateOrConnectWithoutProductsInput[]
    createMany?: recommended_productsCreateManyProductsInputEnvelope
    connect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type product_imagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type recommended_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput> | recommended_productsCreateWithoutProductsInput[] | recommended_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recommended_productsCreateOrConnectWithoutProductsInput | recommended_productsCreateOrConnectWithoutProductsInput[]
    upsert?: recommended_productsUpsertWithWhereUniqueWithoutProductsInput | recommended_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: recommended_productsCreateManyProductsInputEnvelope
    set?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    disconnect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    delete?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    connect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    update?: recommended_productsUpdateWithWhereUniqueWithoutProductsInput | recommended_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: recommended_productsUpdateManyWithWhereWithoutProductsInput | recommended_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: recommended_productsScalarWhereInput | recommended_productsScalarWhereInput[]
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type recommended_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput> | recommended_productsCreateWithoutProductsInput[] | recommended_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recommended_productsCreateOrConnectWithoutProductsInput | recommended_productsCreateOrConnectWithoutProductsInput[]
    upsert?: recommended_productsUpsertWithWhereUniqueWithoutProductsInput | recommended_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: recommended_productsCreateManyProductsInputEnvelope
    set?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    disconnect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    delete?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    connect?: recommended_productsWhereUniqueInput | recommended_productsWhereUniqueInput[]
    update?: recommended_productsUpdateWithWhereUniqueWithoutProductsInput | recommended_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: recommended_productsUpdateManyWithWhereWithoutProductsInput | recommended_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: recommended_productsScalarWhereInput | recommended_productsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutRecommended_productsInput = {
    create?: XOR<productsCreateWithoutRecommended_productsInput, productsUncheckedCreateWithoutRecommended_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutRecommended_productsInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutRecommended_productsNestedInput = {
    create?: XOR<productsCreateWithoutRecommended_productsInput, productsUncheckedCreateWithoutRecommended_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutRecommended_productsInput
    upsert?: productsUpsertWithoutRecommended_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutRecommended_productsInput, productsUpdateWithoutRecommended_productsInput>, productsUncheckedUpdateWithoutRecommended_productsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type productsCreateWithoutCategoriesInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    recommended_products?: recommended_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    recommended_products?: recommended_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: StringFilter<"products"> | string
    Extract_Name?: StringFilter<"products"> | string
    Botanical_Name?: StringNullableFilter<"products"> | string | null
    Part_Used?: StringNullableFilter<"products"> | string | null
    Typical_Extraction_Ratio?: StringNullableFilter<"products"> | string | null
    Active_Compound?: StringNullableFilter<"products"> | string | null
    Primary_Benefit?: StringNullableFilter<"products"> | string | null
    Unit_in_Order?: StringNullableFilter<"products"> | string | null
    Package_Size?: StringNullableFilter<"products"> | string | null
    appearance?: StringNullableFilter<"products"> | string | null
    Category?: StringFilter<"products"> | string
  }

  export type productsCreateWithoutProduct_imagesInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    categories: categoriesCreateNestedOneWithoutProductsInput
    recommended_products?: recommended_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_imagesInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    Category: string
    recommended_products?: recommended_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
  }

  export type productsUpsertWithoutProduct_imagesInput = {
    update: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type productsUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    recommended_products?: recommended_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: StringFieldUpdateOperationsInput | string
    recommended_products?: recommended_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_imagesCreateWithoutProductsInput = {
    id: string
    url: string
  }

  export type product_imagesUncheckedCreateWithoutProductsInput = {
    id: string
    url: string
  }

  export type product_imagesCreateOrConnectWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesCreateManyProductsInputEnvelope = {
    data: product_imagesCreateManyProductsInput | product_imagesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    category_id: string
    category_name: string
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id: string
    category_name: string
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type recommended_productsCreateWithoutProductsInput = {
    id: string
  }

  export type recommended_productsUncheckedCreateWithoutProductsInput = {
    id: string
  }

  export type recommended_productsCreateOrConnectWithoutProductsInput = {
    where: recommended_productsWhereUniqueInput
    create: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput>
  }

  export type recommended_productsCreateManyProductsInputEnvelope = {
    data: recommended_productsCreateManyProductsInput | recommended_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_imagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    update: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    data: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
  }

  export type product_imagesUpdateManyWithWhereWithoutProductsInput = {
    where: product_imagesScalarWhereInput
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesScalarWhereInput = {
    AND?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    OR?: product_imagesScalarWhereInput[]
    NOT?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    id?: StringFilter<"product_images"> | string
    url?: StringFilter<"product_images"> | string
    productId?: StringFilter<"product_images"> | string
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: recommended_productsWhereUniqueInput
    update: XOR<recommended_productsUpdateWithoutProductsInput, recommended_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<recommended_productsCreateWithoutProductsInput, recommended_productsUncheckedCreateWithoutProductsInput>
  }

  export type recommended_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: recommended_productsWhereUniqueInput
    data: XOR<recommended_productsUpdateWithoutProductsInput, recommended_productsUncheckedUpdateWithoutProductsInput>
  }

  export type recommended_productsUpdateManyWithWhereWithoutProductsInput = {
    where: recommended_productsScalarWhereInput
    data: XOR<recommended_productsUpdateManyMutationInput, recommended_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type recommended_productsScalarWhereInput = {
    AND?: recommended_productsScalarWhereInput | recommended_productsScalarWhereInput[]
    OR?: recommended_productsScalarWhereInput[]
    NOT?: recommended_productsScalarWhereInput | recommended_productsScalarWhereInput[]
    id?: StringFilter<"recommended_products"> | string
    productId?: StringFilter<"recommended_products"> | string
  }

  export type productsCreateWithoutRecommended_productsInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutRecommended_productsInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
    Category: string
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutRecommended_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutRecommended_productsInput, productsUncheckedCreateWithoutRecommended_productsInput>
  }

  export type productsUpsertWithoutRecommended_productsInput = {
    update: XOR<productsUpdateWithoutRecommended_productsInput, productsUncheckedUpdateWithoutRecommended_productsInput>
    create: XOR<productsCreateWithoutRecommended_productsInput, productsUncheckedCreateWithoutRecommended_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutRecommended_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutRecommended_productsInput, productsUncheckedUpdateWithoutRecommended_productsInput>
  }

  export type productsUpdateWithoutRecommended_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutRecommended_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: StringFieldUpdateOperationsInput | string
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyCategoriesInput = {
    id: string
    Extract_Name: string
    Botanical_Name?: string | null
    Part_Used?: string | null
    Typical_Extraction_Ratio?: string | null
    Active_Compound?: string | null
    Primary_Benefit?: string | null
    Unit_in_Order?: string | null
    Package_Size?: string | null
    appearance?: string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    recommended_products?: recommended_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    recommended_products?: recommended_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Extract_Name?: StringFieldUpdateOperationsInput | string
    Botanical_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Part_Used?: NullableStringFieldUpdateOperationsInput | string | null
    Typical_Extraction_Ratio?: NullableStringFieldUpdateOperationsInput | string | null
    Active_Compound?: NullableStringFieldUpdateOperationsInput | string | null
    Primary_Benefit?: NullableStringFieldUpdateOperationsInput | string | null
    Unit_in_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Package_Size?: NullableStringFieldUpdateOperationsInput | string | null
    appearance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_imagesCreateManyProductsInput = {
    id: string
    url: string
  }

  export type recommended_productsCreateManyProductsInput = {
    id: string
  }

  export type product_imagesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type recommended_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}