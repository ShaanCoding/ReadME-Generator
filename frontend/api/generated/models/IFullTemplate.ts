/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IFullTemplate = {
    title: string;
    description: string;
    author: {
        name: string;
        url: {
            url: string;
            _type: IFullTemplate._type;
        };
    };
    contributors: Array<{
        name: string;
        url: {
            url: string;
            _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
        };
    }>;
    startupBlocks: Array<string>;
    image: string;
    dateCreated: string;
    lastUpdated: string;
    tags: Array<{
        name: string;
        url: string;
    }>;
    featured: boolean;
    folder: string;
    functions: Array<{
        name: string;
        description: string;
        function: string;
        variables: Array<({
            label: string;
            name: string;
            defaultValue: string;
            _type: 'input';
        } | {
            label: string;
            name: string;
            defaultValue: string;
            _type: 'textArea';
        } | {
            label: string;
            name: string;
            defaultValue: boolean;
            _type: 'checkBox';
        } | {
            label: string;
            name: string;
            defaultValue: Array<Record<string, any>>;
            listSchema: Array<{
                label: string;
                name: string;
                _type: string;
            }>;
            _type: 'list';
        } | {
            label: string;
            name: string;
            defaultValue: Record<string, any>;
            objectSchema: Array<{
                label: string;
                name: string;
                _type: string;
            }>;
            _type: 'object';
        } | {
            label: string;
            name: string;
            defaultValue: string;
            selectList: Array<{
                label: string;
                value: string;
            }>;
            _type: 'select';
        })>;
    }>;
};
export namespace IFullTemplate {
    export enum _type {
        FACEBOOK = 'Facebook',
        INSTAGRAM = 'Instagram',
        TWITTER = 'Twitter',
        GITHUB = 'Github',
        LINKED_IN = 'LinkedIn',
        OTHER = 'Other',
    }
}

