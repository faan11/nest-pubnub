import { DynamicModule, Module, Provider } from '@nestjs/common';
import Pubnub from 'pubnub';
import { PubNubModuleAsyncOptions, PubNubOptionsFactory } from './pub-nub-async-option';
import { PubNubService } from './pub-nub.service';


@Module({
  providers:[ {
    provide: PubNubService,
    useFactory: async (options: Pubnub.PubnubConfig) => {
      return new Pubnub(options);
    },
    inject: ['CONFIG_OPTIONS'],
  }],
  exports: [PubNubService],
})
export class PubNubModule  {
  static register(options: Pubnub.PubnubConfig): DynamicModule {
    return {
      module: PubNubModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
    };
  }
  static registerAsync(options: PubNubModuleAsyncOptions): DynamicModule {
    return {
      module: PubNubModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(options: PubNubModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: PubNubModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: 'CONFIG_OPTIONS',
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: 'CONFIG_OPTIONS',
      // tslint:disable-next-line:max-line-length
      useFactory: async (optionsFactory: PubNubOptionsFactory) => await optionsFactory.createAgendaOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

}
