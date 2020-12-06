//
//  DeviceCheckerModule.m
//  DigitalChannel
//
//  Created by Fuad Firoz on 07/12/20.
//

#import "DeviceCheckerModule.h"

@implementation DeviceCheckerModule

// To export a module named DeviceCheckerModule
RCT_EXPORT_MODULE(DeviceChecker);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(checkDevice)
{
  return TARGET_IPHONE_SIMULATOR == 0 ? @1 : @0;
}

@end
