/*
* @author Jordi Serra
* @since 2.0
*/
export { PersistenceService }       from './services/persistence.service';
export { ICache }                   from './abstracts/persistence.cache';
export { AbstractCachedService }    from './abstracts/persistence.cached_service';
export { IPersistenceContainer }    from './abstracts/persistence.container';
export { PersistenceConfig }        from './types/persistence.config';
export { CacheConfig }              from './types/persistence.cache_config';
export { ItemDefinition }           from './types/persistence.item_definition';
export { StorageType }              from './constants/persistence.storage_type';
export { PersistenceModule }        from './persistence.module';
export { ModelOutputData }          from './interficies/model.output.persistence';
export { InputWS }                  from './interficies/ws.input.persistence';
export { OutputWS }                 from './interficies/ws.output.persistence';
export { CallWsService }            from './services/ws/call.ws.service';
