export namespace sap.capire.bookshop {
    export type Addresses = IAddress[];
    export type NameStr = string;

    export enum Gender {
        NonBinary = 1,
        Male = 2,
        Female = 3,
    }

    export interface IAddress {
        street: string;
        houseNo: string;
        town: string;
        country: string;
    }

    export interface IArrayUsingEntity {
        ID: string;
        inlineArray: unknown[];
        adressArray: IAddress[];
        compositoinField: ICompositoinField[];
    }

    export interface ICompositoinField {
        up_?: IArrayUsingEntity;
        up__ID?: string;
        idComposition: string;
        quantityComposition: number;
    }

    export interface IAuthors {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        ID: number;
        name: IName;
        gender: Gender;
        addresses: Addresses;
        dateOfBirth: Date;
        dateOfDeath: Date;
        placeOfBirth: string;
        placeOfDeath: string;
        books?: IBooks[];
    }

    export interface IBooks {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        ID: number;
        title: string;
        descr: string;
        longdesc: string;
        author?: IAuthors;
        author_ID?: number;
        genre?: IGenres;
        genre_ID?: number;
        stock: number;
        price: number;
        currency: sap.common.ICurrencies;
        currency_code?: string;
        "/part1/part2"?: string;
        texts: IBooksTexts[];
        localized?: IBooksTexts;
    }

    export interface IBooksTexts {
        locale: string;
        ID: number;
        title: string;
        descr: string;
        longdesc: string;
    }

    export interface IEntityWithSlashes {
        field1: string;
        "/part1/part2": string;
    }

    export interface IGenres {
        name: string;
        descr: string;
        ID: number;
        parent?: IGenres;
        parent_ID?: number;
        children: IGenres[];
        texts: IGenresTexts[];
        localized?: IGenresTexts;
    }

    export interface IGenresTexts {
        locale: string;
        name: string;
        descr: string;
        ID: number;
    }

    export interface IName {
        firstname: NameStr;
        lastname: NameStr;
    }

    export enum Entity {
        Address = "sap.capire.bookshop.Address",
        ArrayUsingEntity = "sap.capire.bookshop.ArrayUsingEntity",
        CompositoinField = "sap.capire.bookshop.ArrayUsingEntity.compositoinField",
        Authors = "sap.capire.bookshop.Authors",
        Books = "sap.capire.bookshop.Books",
        BooksTexts = "sap.capire.bookshop.Books.texts",
        EntityWithSlashes = "sap.capire.bookshop.EntityWithSlashes",
        Genres = "sap.capire.bookshop.Genres",
        GenresTexts = "sap.capire.bookshop.Genres.texts",
        Name = "sap.capire.bookshop.Name",
    }

    export enum SanitizedEntity {
        Address = "Address",
        ArrayUsingEntity = "ArrayUsingEntity",
        CompositoinField = "CompositoinField",
        Authors = "Authors",
        Books = "Books",
        BooksTexts = "BooksTexts",
        EntityWithSlashes = "EntityWithSlashes",
        Genres = "Genres",
        GenresTexts = "GenresTexts",
        Name = "Name",
    }
}

export namespace sap.common {
    export interface ICountries {
        name: string;
        descr: string;
        code: string;
        texts: ICountriesTexts[];
        localized?: ICountriesTexts;
    }

    export interface ICountriesTexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: ICurrenciesTexts[];
        localized?: ICurrenciesTexts;
    }

    export interface ICurrenciesTexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ILanguages {
        name: string;
        descr: string;
        code: string;
        texts: ILanguagesTexts[];
        localized?: ILanguagesTexts;
    }

    export interface ILanguagesTexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export enum Entity {
        Countries = "sap.common.Countries",
        CountriesTexts = "sap.common.Countries.texts",
        Currencies = "sap.common.Currencies",
        CurrenciesTexts = "sap.common.Currencies.texts",
        Languages = "sap.common.Languages",
        LanguagesTexts = "sap.common.Languages.texts",
    }

    export enum SanitizedEntity {
        Countries = "Countries",
        CountriesTexts = "CountriesTexts",
        Currencies = "Currencies",
        CurrenciesTexts = "CurrenciesTexts",
        Languages = "Languages",
        LanguagesTexts = "LanguagesTexts",
    }
}

export namespace CatalogService {
    export interface IActionReturnType {
        success: boolean;
    }

    export interface IArrayParameterType {
        value: string;
    }

    export interface IArrayUsingEntity {
        ID: string;
        inlineArray: unknown[];
        adressArray: sap.capire.bookshop.IAddress[];
        compositoinField: ICompositoinField[];
    }

    export interface ICompositoinField {
        up_?: IArrayUsingEntity;
        up__ID?: string;
        idComposition: string;
        quantityComposition: number;
    }

    export interface IBooks {
        createdAt?: Date;
        modifiedAt?: Date;
        ID: number;
        title: string;
        descr: string;
        longdesc: string;
        author: sap.capire.bookshop.IName;
        genre?: IGenres;
        genre_ID?: number;
        stock: number;
        price: number;
        currency: ICurrencies;
        currency_code?: string;
        "/part1/part2"?: string;
        texts: IBooksTexts[];
        localized?: IBooksTexts;
        isStockVisible?: number;
    }

    export namespace IBooks.actions {
        export enum ActionAddRating {
            name = "addRating",
            paramStars = "stars",
        }

        export interface IActionAddRatingParams {
            stars: number;
        }

        export enum FuncGetViewsCount {
            name = "getViewsCount",
        }

        export type FuncGetViewsCountReturn = number;
    }

    export interface IBooksTexts {
        locale: string;
        ID: number;
        title: string;
        descr: string;
        longdesc: string;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: ICurrenciesTexts[];
        localized?: ICurrenciesTexts;
    }

    export interface ICurrenciesTexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface IGenres {
        name: string;
        descr: string;
        ID: number;
        parent?: IGenres;
        parent_ID?: number;
        children: IGenres[];
        texts: IGenresTexts[];
        localized?: IGenresTexts;
    }

    export interface IGenresTexts {
        locale: string;
        name: string;
        descr: string;
        ID: number;
    }

    export interface IServiceEntity {
        id: string;
        arrayComplex: IArrayParameterType[];
        arraySimple: string[];
    }

    export interface ITypedParameterType {
        value: string;
    }

    export enum FuncGetBooks {
        name = "getBooks",
        paramAuthor = "author",
    }

    export interface IFuncGetBooksParams {
        author: number;
    }

    export type FuncGetBooksReturn = IBooks[];

    export enum ActionSubmitOrder {
        name = "submitOrder",
        paramBook = "book",
        paramAmount = "amount",
    }

    export interface IActionSubmitOrderParams {
        book: number;
        amount: number;
    }

    export enum ActionUnboudAction {
        name = "unboudAction",
        paramSimpleParameter = "simpleParameter",
        paramArrayParameter = "arrayParameter",
        paramTypedParameter = "typedParameter",
    }

    export interface IActionUnboudActionParams {
        simpleParameter: string;
        arrayParameter: IArrayParameterType[];
        typedParameter: ITypedParameterType;
    }

    export type ActionUnboudActionReturn = IActionReturnType;

    export enum Entity {
        ActionReturnType = "CatalogService.ActionReturnType",
        ArrayParameterType = "CatalogService.arrayParameterType",
        ArrayUsingEntity = "CatalogService.ArrayUsingEntity",
        CompositoinField = "CatalogService.ArrayUsingEntity.compositoinField",
        Books = "CatalogService.Books",
        BooksTexts = "CatalogService.Books.texts",
        Currencies = "CatalogService.Currencies",
        CurrenciesTexts = "CatalogService.Currencies.texts",
        Genres = "CatalogService.Genres",
        GenresTexts = "CatalogService.Genres.texts",
        ServiceEntity = "CatalogService.ServiceEntity",
        TypedParameterType = "CatalogService.typedParameterType",
    }

    export enum SanitizedEntity {
        ActionReturnType = "ActionReturnType",
        ArrayParameterType = "ArrayParameterType",
        ArrayUsingEntity = "ArrayUsingEntity",
        CompositoinField = "CompositoinField",
        Books = "Books",
        BooksTexts = "BooksTexts",
        Currencies = "Currencies",
        CurrenciesTexts = "CurrenciesTexts",
        Genres = "Genres",
        GenresTexts = "GenresTexts",
        ServiceEntity = "ServiceEntity",
        TypedParameterType = "TypedParameterType",
    }
}

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
