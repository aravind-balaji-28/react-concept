import { AppProvider } from "../../context/AppProvider"
import Content from "./Context";

// Re-render happens only if:
// 1. props change
// 2. state change
// 3. subscribed context value changes

// Before (Props Drilling)

// App
// └── Layout (receives user)
//       └── Sidebar (receives user)
//            └── UserPanel (receives user)


// After (Context)

// App (Provider)
// └── Layout
//       └── Sidebar
//            └── UserPanel (consumes context)

// Props → follow tree ✅
// Context → bypass tree (data flow) ✅


// | Feature        | Props         | Context           |
// | -------------- | ------------- | ----------------- |
// | Data path      | Step-by-step  | Direct access     |
// | Coupling       | Tight         | Loose             |
// | Tree structure | Required      | Ignored for data  |
// | Re-render      | Parent-driven | Subscriber-driven |

const MainPage = () => {
    return (
        <AppProvider>
            <Content />
        </AppProvider>
    );
};

export default MainPage;