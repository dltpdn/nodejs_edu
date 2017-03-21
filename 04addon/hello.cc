#include <node.h>
#include <v8.h>

using namespace v8;

void Add( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  if (args.Length() < 2) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }

  double value = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> num = Number::New(isolate, value);

  args.GetReturnValue().Set(num);
}



void Method( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}


void init(Local<Object> exports) {
        Isolate* isolate = exports->GetIsolate();
  exports->Set(String::NewFromUtf8(isolate, "prop"), String::NewFromUtf8(isolate,"hello" ));
  NODE_SET_METHOD(exports, "method", Method);
  NODE_SET_METHOD (exports, "add" , Add);
}
NODE_MODULE(hello, init)
