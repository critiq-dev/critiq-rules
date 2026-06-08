use std::fmt::{self, Display, Formatter};

struct Bad;
impl Display for Bad {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        println!("called Bad::fmt");
        write!(f, "Bad")
    }
}
